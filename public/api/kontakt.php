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
if ($name === '' || mb_strlen($name) > 100 || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($message) < 10 || mb_strlen($message) > 3000 || $age < 18 || $age > 99 || $country === '' || $platform === '' || $reach === '' || $comfort === '' || $goal === '' || !$consent) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'invalid']); exit; }
$to = 'contact@prom4fans.com';
$subject = 'Neue Bewerbung über prom4fans.com – ' . $name;
$body = "Name: $name\nE-Mail: $email\nAlter: $age\nLand: $country\nPlattform: $platform\nReichweite: $reach\nPosting-Komfort: $comfort\nHauptziel: $goal\n\nErzähl uns von dir:\n$message";
$headers = "From: Prom4Fans <contact@prom4fans.com>\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";
if (!mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $body, $headers)) { http_response_code(500); echo json_encode(['ok'=>false,'error'=>'send_failed']); exit; }

// Branded confirmation for the person who submitted the application.
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$confirmationSubject = 'Wir haben deine Anfrage erhalten – Prom4Fans';
$confirmationHtml = '<!doctype html><html lang="de"><body style="margin:0;background:#f6f4fb;color:#15162d;font-family:Arial,Helvetica,sans-serif"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:32px 12px;background:#f6f4fb"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#fff;border-radius:20px;overflow:hidden"><tr><td style="padding:28px 32px;background:#15162d"><div style="font-size:16px;font-weight:800;letter-spacing:2px;color:#d6fa43">PROM4FANS</div><div style="margin-top:6px;font-size:12px;color:#bfc1d1">Creator Management</div></td></tr><tr><td style="padding:38px 32px"><div style="display:inline-block;padding:7px 12px;border-radius:999px;background:#d6fa43;font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase">Anfrage erhalten</div><h1 style="margin:20px 0 14px;font-size:30px;line-height:1.05;letter-spacing:-1px">Danke, '.$safeName.'.</h1><p style="margin:0 0 16px;color:#586078;font-size:16px;line-height:1.7">Deine Angaben sind sicher bei uns angekommen. Wir schauen sie persönlich durch und melden uns in der Regel innerhalb von 1–2 Werktagen bei dir.</p><p style="margin:0;color:#586078;font-size:16px;line-height:1.7">Wenn du noch etwas ergänzen möchtest, antworte einfach auf diese E-Mail.</p></td></tr><tr><td style="border-top:1px solid #eceaf2;padding:22px 32px;color:#7c7f92;font-size:12px;line-height:1.6">Prom4Fans · Julius Blumberg · Brückenstr. 9 · 24220 Flintbek<br><a href="mailto:contact@prom4fans.com" style="color:#6c35ed">contact@prom4fans.com</a></td></tr></table></td></tr></table></body></html>';
$confirmationHeaders = "From: Prom4Fans <contact@prom4fans.com>\r\nReply-To: contact@prom4fans.com\r\nMIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\n";
mail($email, '=?UTF-8?B?'.base64_encode($confirmationSubject).'?=', $confirmationHtml, $confirmationHeaders);
echo json_encode(['ok'=>true]);
?>
