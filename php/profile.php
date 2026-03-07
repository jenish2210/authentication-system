<?php

require 'redis.php';
require 'mongo.php';
require 'db.php';

$token=$_POST['token'];

$user_id=$redis->get($token);

if(!$user_id){
echo json_encode([
"status"=>"error",
"message"=>"Unauthorized"
]);
exit();
}

$age=$_POST['age'];
$dob=$_POST['dob'];
$contact=$_POST['contact'];

/* get name from mysql */

$stmt=$conn->prepare("SELECT name FROM users WHERE id=?");
$stmt->bind_param("i",$user_id);
$stmt->execute();

$result=$stmt->get_result();
$user=$result->fetch_assoc();

$name=$user['name'];

/* update mongodb profile */

$collection->updateOne(

["user_id"=>$user_id],

[
'$set'=>[
"name"=>$name,
"age"=>$age,
"dob"=>$dob,
"contact"=>$contact
]
],

["upsert"=>true]

);

echo json_encode([
"status"=>"success",
"message"=>"Profile saved successfully"
]);

?>