<?php

require '../vendor/autoload.php';

$uri = getenv("MONGO_URI");

try{

$client = new MongoDB\Client($uri);

$db = $client->intern;

echo "MongoDB Connected Successfully";

}catch(Exception $e){

echo "MongoDB Connection Failed: " . $e->getMessage();

}

?>