<?php

require '../vendor/autoload.php';

$uri = "mongodb://mongo:tpaYMoRpJRvspZcRmAYMtVcjhsikoAal@maglev.proxy.rlwy.net:52761";

$client = new MongoDB\Client($uri);

$db = $client->intern;

$collection = $db->profiles;

?>