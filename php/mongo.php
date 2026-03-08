<?php

require '../vendor/autoload.php';

$uri = trim(getenv("MONGO_URI"));  // ← add trim()

$client = new MongoDB\Client($uri);

$db = $client->selectDatabase("intern");

$collection = $db->selectCollection("profiles");

?>