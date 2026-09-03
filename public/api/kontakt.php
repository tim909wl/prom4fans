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
echo json_encode(['ok'=>true]);
?>
