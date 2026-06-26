<?php
require '../vendor/autoload.php';

$url = getenv("REDIS_URL");

try {
    $redis = new Predis\Client($url);
    $redis->set('test', 'hello');
    echo $redis->get('test');
    exit;
} catch (Exception $e) {
    die($e->getMessage());
}
