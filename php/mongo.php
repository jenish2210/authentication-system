<?php

require '../vendor/autoload.php';

$uri = getenv("MONGO_URI");

$client = new MongoDB\Client($uri);

$db = $client->intern;

$collection = $db->profiles;

?>