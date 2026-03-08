<?php

require '../vendor/autoload.php';

$url = getenv("REDIS_URL");

$parts = parse_url($url);

$redis = new Predis\Client([
    'scheme' => 'tls',
    'host'   => $parts['host'],
    'port'   => $parts['port'],
    'username' => $parts['user'],
    'password' => $parts['pass']
]);

?>