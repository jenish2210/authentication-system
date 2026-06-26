<?php
require '../vendor/autoload.php';

$url = getenv("REDIS_URL");

echo "<pre>";
var_dump($url);
exit;
