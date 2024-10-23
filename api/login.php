<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

include 'dBConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

// Get the request method
$request_method = $_SERVER['REQUEST_METHOD'];


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare SQL statement to prevent SQL injection
    $sql = "SELECT * FROM users WHERE username = :username";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);

    // Execute the query
    $stmt->execute();

    // Check if any row was returned
    if ($stmt->rowCount() > 0) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // Verifying the password
        if (password_verify($password, $row['password'])) {
            // Store user information in session
            $_SESSION['username'] = $row['username'];
            $_SESSION['user_id'] = $row['id'];

            // Respond with success
            echo json_encode(['success' => true, 'message' => 'Login successful']);
        } else {
            // Invalid password
            echo json_encode(['success' => false, 'message' => 'Invalid password']);
        }
    } else {
        // Username not found
        echo json_encode(['success' => false, 'message' => 'No user found with that username']);
    }
}

$conn = null;
