<?php
require '../vendor/autoload.php';

$url = getenv("REDIS_URL");

if (!$url) {
    die("REDIS_URL environment variable is not set.");
}

$parts = parse_url($url);

if ($parts === false) {
    die("Invalid REDIS_URL format.");
}

$redis = new Predis\Client([
    'scheme'   => ($parts['scheme'] === 'rediss') ? 'tls' : 'tcp',
    'host'     => $parts['host'],
    'port'     => $parts['port'],
    'username' => $parts['user'] ?? 'default',
    'password' => $parts['pass']
]);
?>
