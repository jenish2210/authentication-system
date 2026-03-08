<?php

require 'mongo.php';

$result = $collection->insertOne([
    "name" => "Test User",
    "age" => 22
]);

echo "Inserted ID: " . $result->getInsertedId();

?>