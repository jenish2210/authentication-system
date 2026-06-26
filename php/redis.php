<?php

require '../vendor/autoload.php';

$url = getenv("REDIS_URL");

try {
    $redis = new Predis\Client($url);
} catch (Exception $e) {
    die("Redis Error: " . $e->getMessage());
}
