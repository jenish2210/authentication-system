<?php

require 'redis.php';

$redis->set("hello","world");

echo $redis->get("hello");
