<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, max-age=0');
header('X-Content-Type-Options: nosniff');
header('X-Robots-Tag: noindex, nofollow');

$https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');
session_set_cookie_params([
  'lifetime' => 0,
  'path' => '/',
  'secure' => $https,
  'httponly' => true,
  'samesite' => 'Lax',
]);
session_start();

function respond(int $status, array $payload): never {
  http_response_code($status);
  echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
  exit;
}

function sameOriginRequest(): bool {
  if (empty($_SERVER['HTTP_ORIGIN'])) return true;
  $origin = strtolower(rtrim((string)$_SERVER['HTTP_ORIGIN'], '/'));
  $allowed = [
    'https://prom4fans.com',
    'https://www.prom4fans.com',
    'http://localhost:3000',
    'http://localhost:3001',
  ];
  return in_array($origin, $allowed, true);
}

function clientIp(): string {
  return (string)($_SERVER['REMOTE_ADDR'] ?? 'unknown');
}

function rateLimited(string $ip): bool {
  $window = 3600;
  $limit = 5;
  $file = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'prom4fans-contact-' . hash('sha256', $ip) . '.json';
  $now = time();
  $handle = @fopen($file, 'c+');
  if ($handle === false) return false;

  try {
    if (!flock($handle, LOCK_EX)) return false;
    $raw = stream_get_contents($handle);
    $timestamps = json_decode($raw ?: '[]', true);
    if (!is_array($timestamps)) $timestamps = [];
    $timestamps = array_values(array_filter($timestamps, static fn($ts) => is_int($ts) && $ts > $now - $window));
    if (count($timestamps) >= $limit) {
      flock($handle, LOCK_UN);
      return true;
    }
    $timestamps[] = $now;
    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, json_encode($timestamps));
    fflush($handle);
    flock($handle, LOCK_UN);
    return false;
  } finally {
    fclose($handle);
  }
}

if (!sameOriginRequest()) respond(403, ['ok' => false, 'error' => 'forbidden']);

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['token'])) {
  $token = bin2hex(random_bytes(32));
  $_SESSION['contact_token'] = $token;
  $_SESSION['contact_token_issued'] = time();
  respond(200, ['ok' => true, 'token' => $token]);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header('Allow: GET, POST');
  respond(405, ['ok' => false, 'error' => 'method']);
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) $data = $_POST;

// Honeypot: tell bots the submission succeeded without sending anything.
if (!empty($data['company'])) respond(200, ['ok' => true]);

$token = (string)($data['token'] ?? '');
$sessionToken = (string)($_SESSION['contact_token'] ?? '');
$issuedAt = (int)($_SESSION['contact_token_issued'] ?? 0);
$age = time() - $issuedAt;

if ($token === '' || $sessionToken === '' || !hash_equals($sessionToken, $token) || $age < 3 || $age > 7200) {
  respond(400, ['ok' => false, 'error' => 'spam_check_failed']);
}

// One-time token: a replay of the same form POST is rejected.
unset($_SESSION['contact_token'], $_SESSION['contact_token_issued']);

if (rateLimited(clientIp())) respond(429, ['ok' => false, 'error' => 'rate_limited']);

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$profileAge = filter_var($data['age'] ?? null, FILTER_VALIDATE_INT);
$country = trim((string)($data['country'] ?? ''));
$platform = trim((string)($data['platform'] ?? ''));
$reach = trim((string)($data['reach'] ?? ''));
$comfort = trim((string)($data['comfort'] ?? ''));
$goal = trim((string)($data['goal'] ?? ''));
$consent = ($data['consent'] ?? false) === true;
$locale = (($data['locale'] ?? 'de') === 'en') ? 'en' : 'de';

$allowedPlatforms = ['OnlyFans', 'Fansly', 'Fanvue', 'MalouM'];
$allowedComfort = ['lifestyle', 'both', 'unsure'];
$allowedGoals = ['start', 'grow', 'system', 'other'];

if ($name === '' || mb_strlen($name) > 100) respond(400, ['ok' => false, 'error' => 'invalid_name']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 200) respond(400, ['ok' => false, 'error' => 'invalid_email']);
if (mb_strlen($message) < 10 || mb_strlen($message) > 3000) respond(400, ['ok' => false, 'error' => 'invalid_message']);
if (
  $profileAge === false || $profileAge < 18 || $profileAge > 99 ||
  $country === '' || mb_strlen($country) > 100 ||
  $reach === '' || mb_strlen($reach) > 200 ||
  !in_array($platform, $allowedPlatforms, true) ||
  !in_array($comfort, $allowedComfort, true) ||
  !in_array($goal, $allowedGoals, true)
) respond(400, ['ok' => false, 'error' => 'invalid_profile']);
if (!$consent) respond(400, ['ok' => false, 'error' => 'consent_required']);

$comfortLabels = [
  'de' => ['lifestyle' => 'Nur nicht-explizite / Lifestyle-Inhalte', 'both' => 'Lifestyle und explizite Inhalte', 'unsure' => 'Noch unsicher – lass uns darüber sprechen'],
  'en' => ['lifestyle' => 'Non-explicit / lifestyle content only', 'both' => 'Lifestyle and explicit content', 'unsure' => 'Still unsure – let’s talk about it'],
];
$goalLabels = [
  'de' => ['start' => 'Erste Subscription aufbauen', 'grow' => 'Bestehende Subscription wachsen lassen', 'system' => 'Mehr Struktur und weniger Stress', 'other' => 'Etwas anderes'],
  'en' => ['start' => 'Build a first subscription', 'grow' => 'Grow an existing subscription', 'system' => 'More structure, less stress', 'other' => 'Something else'],
];

$copy = [
  'de' => [
    'receiverSubject' => 'Neue Bewerbung über prom4fans.com – ' . $name,
    'fieldName' => 'Name', 'fieldEmail' => 'E-Mail', 'fieldAge' => 'Alter', 'fieldCountry' => 'Land',
    'fieldPlatform' => 'Plattform', 'fieldReach' => 'Reichweite', 'fieldComfort' => 'Posting-Komfort', 'fieldGoal' => 'Hauptziel',
    'messageIntro' => 'Erzähl uns von dir:',
    'confirmationSubject' => 'Wir haben deine Anfrage erhalten – Prom4Fans',
    'badge' => 'Anfrage erhalten', 'thanksTemplate' => 'Danke, %s.',
    'body1' => 'Deine Angaben sind sicher bei uns angekommen. Wir schauen sie persönlich durch und melden uns in der Regel innerhalb von 1–2 Werktagen bei dir.',
    'body2Prefix' => 'Wenn du noch etwas ergänzen möchtest, schreibe uns bitte an ', 'body2Suffix' => '.',
    'autoNote' => 'Diese Nachricht wurde automatisch von <strong>no-reply@prom4fans.com</strong> versendet. Diese Adresse wird nicht überwacht.',
    'tagline' => 'Creator Management',
  ],
  'en' => [
    'receiverSubject' => 'New application via prom4fans.com – ' . $name,
    'fieldName' => 'Name', 'fieldEmail' => 'Email', 'fieldAge' => 'Age', 'fieldCountry' => 'Country',
    'fieldPlatform' => 'Platform', 'fieldReach' => 'Reach', 'fieldComfort' => 'Posting comfort', 'fieldGoal' => 'Main goal',
    'messageIntro' => 'Tell us about yourself:',
    'confirmationSubject' => 'We’ve received your inquiry – Prom4Fans',
    'badge' => 'Inquiry received', 'thanksTemplate' => 'Thanks, %s.',
    'body1' => 'Your details have safely reached us. We review every application personally and usually get back to you within 1–2 business days.',
    'body2Prefix' => 'If you’d like to add anything, just email us at ', 'body2Suffix' => '.',
    'autoNote' => 'This message was sent automatically by <strong>no-reply@prom4fans.com</strong>. This address is not monitored.',
    'tagline' => 'Creator Management',
  ],
];

$t = $copy[$locale];
$comfortLabel = $comfortLabels[$locale][$comfort];
$goalLabel = $goalLabels[$locale][$goal];

$to = 'contact@prom4fans.com';
$subject = $t['receiverSubject'];
$body = "{$t['fieldName']}: $name\n{$t['fieldEmail']}: $email\n{$t['fieldAge']}: $profileAge\n{$t['fieldCountry']}: $country\n{$t['fieldPlatform']}: $platform\n{$t['fieldReach']}: $reach\n{$t['fieldComfort']}: $comfortLabel\n{$t['fieldGoal']}: $goalLabel\n\n{$t['messageIntro']}\n$message";
$headers = "From: Prom4Fans <no-reply@prom4fans.com>\r\nReply-To: $email\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\n";

if (!mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers)) {
  respond(500, ['ok' => false, 'error' => 'send_failed']);
}

$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$confirmationSubject = $t['confirmationSubject'];
$thanksLine = sprintf(htmlspecialchars($t['thanksTemplate'], ENT_QUOTES, 'UTF-8'), $safeName);
$confirmationHtml = '<!doctype html><html lang="' . $locale . '"><body style="margin:0;background:#f6f4fb;color:#15162d;font-family:Arial,Helvetica,sans-serif"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:32px 12px;background:#f6f4fb"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#fff;border-radius:20px;overflow:hidden"><tr><td style="padding:28px 32px;background:#15162d"><div style="font-size:16px;font-weight:800;letter-spacing:2px;color:#d6fa43">PROM4FANS</div><div style="margin-top:6px;font-size:12px;color:#bfc1d1">' . htmlspecialchars($t['tagline'], ENT_QUOTES, 'UTF-8') . '</div></td></tr><tr><td style="padding:38px 32px"><div style="display:inline-block;padding:7px 12px;border-radius:999px;background:#d6fa43;font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase">' . htmlspecialchars($t['badge'], ENT_QUOTES, 'UTF-8') . '</div><h1 style="margin:20px 0 14px;font-size:30px;line-height:1.05;letter-spacing:-1px">' . $thanksLine . '</h1><p style="margin:0 0 16px;color:#586078;font-size:16px;line-height:1.7">' . htmlspecialchars($t['body1'], ENT_QUOTES, 'UTF-8') . '</p><p style="margin:0;color:#586078;font-size:16px;line-height:1.7">' . htmlspecialchars($t['body2Prefix'], ENT_QUOTES, 'UTF-8') . '<a href="mailto:contact@prom4fans.com" style="color:#6c35ed;font-weight:700">contact@prom4fans.com</a>' . htmlspecialchars($t['body2Suffix'], ENT_QUOTES, 'UTF-8') . '</p><div style="margin-top:24px;padding:14px 16px;border-radius:12px;background:#f6f4fb;color:#7c7f92;font-size:12px;line-height:1.6">' . $t['autoNote'] . '</div></td></tr><tr><td style="border-top:1px solid #eceaf2;padding:22px 32px;color:#7c7f92;font-size:12px;line-height:1.6">Prom4Fans · Julius Blumberg · Brückenstr. 9 · 24220 Flintbek<br><a href="mailto:contact@prom4fans.com" style="color:#6c35ed">contact@prom4fans.com</a></td></tr></table></td></tr></table></body></html>';
$confirmationHeaders = "From: Prom4Fans <no-reply@prom4fans.com>\r\nReply-To: contact@prom4fans.com\r\nMIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\n";
@mail($email, '=?UTF-8?B?' . base64_encode($confirmationSubject) . '?=', $confirmationHtml, $confirmationHeaders);

respond(200, ['ok' => true]);
