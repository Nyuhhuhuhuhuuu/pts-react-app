<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

include 'dBConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

session_start();

if (isset($_SESSION['username']) && isset($_SESSION['user_id'])) {
    $response = array(
        'username' => $_SESSION['username'],
        'user_id' => $_SESSION['user_id']
    );
    echo json_encode($response);
} else {
    echo json_encode(['error' => 'User not logged in']);
}
