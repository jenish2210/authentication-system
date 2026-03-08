<?php

require 'redis.php';
require 'mongo.php';

header("Content-Type: application/json");

$token = $_GET['token'] ?? '';

$user_id = $redis->get($token);

if(!$user_id){

echo json_encode([
"status"=>"error",
"message"=>"Unauthorized"
]);
exit();

}

$profile = $collection->findOne([
'user_id' => (string)$user_id
]);

if($profile){

echo json_encode([
"status"=>"success",
"data"=>$profile
]);

}else{

echo json_encode([
"status"=>"empty"
]);

}

?>