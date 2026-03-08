<?php

$host = "bpevpjyiy4lpti1rrebf-mysql.services.clever-cloud.com";
$user = "uch9w3mg0espbueg";
$password = "gknVJbbAfXmsK1vkZ26m";
$dbname = "bpevpjyiy4lpti1rrebf";
$port = 3306;

$conn = new mysqli($host,$user,$password,$dbname,$port);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

?>