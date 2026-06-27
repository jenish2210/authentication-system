<?php

require 'redis.php';
require 'mongo.php';
require 'db.php';

header("Content-Type: application/json");

$token = $_POST['token'] ?? '';

$user_id = $redis->get($token);

if (!$user_id) {

    echo json_encode([
        "status" => "error",
        "message" => "Unauthorized"
    ]);

    exit();

}

$id = (int)$user_id;

$stmt = $conn->prepare("SELECT name FROM users WHERE id=?");
$stmt->bind_param("i", $id);
$stmt->execute();

$result = $stmt->get_result();
$user = $result->fetch_assoc();

$name = $user["name"] ?? "";

$profile = $collection->findOne([
    "user_id" => (string)$user_id
]);

if ($profile) {

    echo json_encode([

        "status" => "success",

        "name" => $name,

        "age" => $profile["age"] ?? "",

        "dob" => $profile["dob"] ?? "",

        "contact" => $profile["contact"] ?? ""

    ]);

} else {

    echo json_encode([

        "status" => "success",

        "name" => $name,

        "age" => "",

        "dob" => "",

        "contact" => ""

    ]);

}

