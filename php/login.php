<?php

require 'db.php';

header("Content-Type: application/json");

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

$stmt = $conn->prepare("SELECT * FROM users WHERE email=? AND password=?");
$stmt->bind_param("ss",$email,$password);
$stmt->execute();

$result = $stmt->get_result();

if($result->num_rows > 0){

    echo json_encode([
        "status" => "success",
        "token" => bin2hex(random_bytes(16))
    ]);

}else{

    echo json_encode([
        "status" => "error"
    ]);

}