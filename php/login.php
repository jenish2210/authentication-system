<?php

require 'db.php';
require 'redis.php';

header('Content-Type: application/json');

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
$stmt->bind_param("s",$email);
$stmt->execute();

$result = $stmt->get_result();
$user = $result->fetch_assoc();

if($user && password_verify($password,$user['password'])){

$token = bin2hex(random_bytes(16));

$redis->setex($token,3600,$user['id']);

echo json_encode([
"status"=>"success",
"token"=>$token
]);

}else{

echo json_encode([
"status"=>"error",
"message"=>"Invalid login"
]);

}

?>