<?php
// Lightweight endpoint for IONOS shared hosting. The static Next export posts here.
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://www.prom4fans.com');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok'=>false,'error'=>'method']); exit; }
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) { $data = $_POST; }
if (!empty($data['company'])) { echo json_encode(['ok'=>true]); exit; }

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$age = (int)($data['age'] ?? 0);
$country = trim((string)($data['country'] ?? ''));
$platform = trim((string)($data['platform'] ?? ''));
$reach = trim((string)($data['reach'] ?? ''));
$comfort = trim((string)($data['comfort'] ?? ''));
$goal = trim((string)($data['goal'] ?? ''));
$consent = !empty($data['consent']);
$locale = (($data['locale'] ?? 'de') === 'en') ? 'en' : 'de';

if ($name === '' || mb_strlen($name) > 100 || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($message) < 10 || mb_strlen($message) > 3000 || $age < 18 || $age > 99 || $country === '' || $platform === '' || $reach === '' || $comfort === '' || $goal === '' || !$consent) {
  http_response_code(400);
  echo json_encode(['ok'=>false,'error'=>'invalid']);
  exit;
}

// --- i18n --------------------------------------------------------------
// Dropdown value -> human label. Must mirror components/contact-form.tsx
// (comfortOptions / goalOptions) so the email shows the same wording the
// applicant actually saw, not the raw option code.
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
    'badge' => 'Anfrage erhalten',
    'thanksTemplate' => 'Danke, %s.',
    'body1' => 'Deine Angaben sind sicher bei uns angekommen. Wir schauen sie persönlich durch und melden uns in der Regel innerhalb von 1–2 Werktagen bei dir.',
    'body2Prefix' => 'Wenn du noch etwas ergänzen möchtest, schreibe uns bitte an ',
    'body2Suffix' => '.',
    'autoNote' => 'Diese Nachricht wurde automatisch von <strong>no-reply@prom4fans.com</strong> versendet. Diese Adresse wird nicht überwacht.',
    'tagline' => 'Creator Management',
  ],
  'en' => [
    'receiverSubject' => 'New application via prom4fans.com – ' . $name,
    'fieldName' => 'Name', 'fieldEmail' => 'Email', 'fieldAge' => 'Age', 'fieldCountry' => 'Country',
    'fieldPlatform' => 'Platform', 'fieldReach' => 'Reach', 'fieldComfort' => 'Posting comfort', 'fieldGoal' => 'Main goal',
    'messageIntro' => 'Tell us about yourself:',
    'confirmationSubject' => 'We’ve received your inquiry – Prom4Fans',
    'badge' => 'Inquiry received',
    'thanksTemplate' => 'Thanks, %s.',
    'body1' => 'Your details have safely reached us. We review every application personally and usually get back to you within 1–2 business days.',
    'body2Prefix' => 'If you’d like to add anything, just email us at ',
    'body2Suffix' => '.',
    'autoNote' => 'This message was sent automatically by <strong>no-reply@prom4fans.com</strong>. This address is not monitored.',
    'tagline' => 'Creator Management',
  ],
];
$t = $copy[$locale];
$comfortLabel = $comfortLabels[$locale][$comfort] ?? $comfort;
$goalLabel = $goalLabels[$locale][$goal] ?? $goal;

// --- Notification to the site owner ------------------------------------
$to = 'contact@prom4fans.com';
$subject = $t['receiverSubject'];
$body = "{$t['fieldName']}: $name\n{$t['fieldEmail']}: $email\n{$t['fieldAge']}: $age\n{$t['fieldCountry']}: $country\n{$t['fieldPlatform']}: $platform\n{$t['fieldReach']}: $reach\n{$t['fieldComfort']}: $comfortLabel\n{$t['fieldGoal']}: $goalLabel\n\n{$t['messageIntro']}\n$message";
$headers = "From: Prom4Fans <no-reply@prom4fans.com>\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";
if (!mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $body, $headers)) { http_response_code(500); echo json_encode(['ok'=>false,'error'=>'send_failed']); exit; }

// --- Branded confirmation for the applicant, in their own language -----
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$confirmationSubject = $t['confirmationSubject'];
$thanksLine = sprintf(htmlspecialchars($t['thanksTemplate'], ENT_QUOTES, 'UTF-8'), $safeName);
$confirmationHtml = '<!doctype html><html lang="' . $locale . '"><body style="margin:0;background:#f6f4fb;color:#15162d;font-family:Arial,Helvetica,sans-serif"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:32px 12px;background:#f6f4fb"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#fff;border-radius:20px;overflow:hidden"><tr><td style="padding:28px 32px;background:#15162d"><div style="font-size:16px;font-weight:800;letter-spacing:2px;color:#d6fa43">PROM4FANS</div><div style="margin-top:6px;font-size:12px;color:#bfc1d1">' . htmlspecialchars($t['tagline'], ENT_QUOTES, 'UTF-8') . '</div></td></tr><tr><td style="padding:38px 32px"><div style="display:inline-block;padding:7px 12px;border-radius:999px;background:#d6fa43;font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase">' . htmlspecialchars($t['badge'], ENT_QUOTES, 'UTF-8') . '</div><h1 style="margin:20px 0 14px;font-size:30px;line-height:1.05;letter-spacing:-1px">' . $thanksLine . '</h1><p style="margin:0 0 16px;color:#586078;font-size:16px;line-height:1.7">' . htmlspecialchars($t['body1'], ENT_QUOTES, 'UTF-8') . '</p><p style="margin:0;color:#586078;font-size:16px;line-height:1.7">' . htmlspecialchars($t['body2Prefix'], ENT_QUOTES, 'UTF-8') . '<a href="mailto:contact@prom4fans.com" style="color:#6c35ed;font-weight:700">contact@prom4fans.com</a>' . htmlspecialchars($t['body2Suffix'], ENT_QUOTES, 'UTF-8') . '</p><div style="margin-top:24px;padding:14px 16px;border-radius:12px;background:#f6f4fb;color:#7c7f92;font-size:12px;line-height:1.6">' . $t['autoNote'] . '</div></td></tr><tr><td style="border-top:1px solid #eceaf2;padding:22px 32px;color:#7c7f92;font-size:12px;line-height:1.6">Prom4Fans · Julius Blumberg · Brückenstr. 9 · 24220 Flintbek<br><a href="mailto:contact@prom4fans.com" style="color:#6c35ed">contact@prom4fans.com</a></td></tr></table></td></tr></table></body></html>';
$confirmationHeaders = "From: Prom4Fans <no-reply@prom4fans.com>\r\nReply-To: contact@prom4fans.com\r\nMIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\n";
mail($email, '=?UTF-8?B?'.base64_encode($confirmationSubject).'?=', $confirmationHtml, $confirmationHeaders);
echo json_encode(['ok'=>true]);
?>
