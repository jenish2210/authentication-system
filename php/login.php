<?php

require 'db.php';
require 'redis.php';

header("Content-Type: application/json");

$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

if ($email == "" || $password == "") {

    echo json_encode([
        "status" => "error",
        "message" => "Email and Password are required."
    ]);

    exit();
}

$stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {

    $user = $result->fetch_assoc();

    if (password_verify($password, $user['password'])) {

        $token = bin2hex(random_bytes(16));

        $redis->setex($token, 3600, $user['id']);

        echo json_encode([
            "status" => "success",
            "token" => $token,
            "name" => $user["name"]
        ]);

    } else {

        echo json_encode([
            "status" => "error",
            "message" => "Invalid password."
        ]);

    }

} else {

    echo json_encode([
        "status" => "error",
        "message" => "User not found."
    ]);

}

$stmt->close();
$conn->close();

?>

