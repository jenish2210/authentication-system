<?php

require 'db.php';

header("Content-Type: application/json");

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

if ($name == "" || $email == "" || $password == "") {

    echo json_encode([
        "status" => "error",
        "message" => "All fields are required."
    ]);

    exit();
}

$check = $conn->prepare("SELECT id FROM users WHERE email=?");
$check->bind_param("s", $email);
$check->execute();

$result = $check->get_result();

if ($result->num_rows > 0) {

    echo json_encode([
        "status" => "error",
        "message" => "Email already registered."
    ]);

    exit();
}

$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

$stmt = $conn->prepare("INSERT INTO users(name,email,password) VALUES(?,?,?)");
$stmt->bind_param("sss", $name, $email, $hashedPassword);

if ($stmt->execute()) {

    echo json_encode([
        "status" => "success",
        "message" => "Registration successful."
    ]);

} else {

    echo json_encode([
        "status" => "error",
        "message" => "Registration failed."
    ]);

}

$stmt->close();
$conn->close();

?>

