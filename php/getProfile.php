<?php
require 'redis.php';
require 'mongo.php';

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

$profile = $collection->findOne([
    "user_id" => (string)$user_id
]);

if ($profile) {

    echo json_encode([
        "status" => "success",
        "age" => $profile["age"] ?? "",
        "dob" => $profile["dob"] ?? "",
        "contact" => $profile["contact"] ?? ""
    ]);

} else {

    echo json_encode([
        "status" => "empty"
    ]);

}
?>

