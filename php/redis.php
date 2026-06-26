<?php
require '../vendor/autoload.php';

$url = getenv("REDIS_URL");

$parts = parse_url($url);

$redis = new Predis\Client([
    'scheme'   => 'tls',              // Upstash uses TLS
    'host'     => $parts['host'],
    'port'     => (int)$parts['port'],
    'password' => $parts['pass'],
]);
?>
