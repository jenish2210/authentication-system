<?php

$host = getenv("bpevpjyiy4lpti1rrebf-mysql.services.clever-cloud.com");
$user = getenv("uch9w3mg0espbueg");
$password = getenv("gknVJbbAfXmsK1vkZ26m");
$dbname = getenv("bpevpjyiy4lpti1rrebf");
$port = getenv("3306");

$conn = new mysqli($host,$user,$password,$dbname,$port);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

?>