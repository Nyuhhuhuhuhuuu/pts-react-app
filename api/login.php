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

if ($request_method == "POST") {
    // Debugging: Check POST data
    error_log(print_r($_POST, true));

    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Prepare SQL statement to prevent SQL injection
        $sql = "SELECT * FROM users WHERE user_nama = :username";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username', $username, PDO::PARAM_STR);

        // Execute the query
        $stmt->execute();
    
        // Check if any row was returned
        if ($stmt->rowCount() > 0) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            
            // Verifying the input password against the hashed password in the DB
            if (password_verify($password, $row['user_password'])) {
                // Start the session and store user info
                session_start();
                
                $_SESSION['user_nama'] = $row['user_nama'];
                $_SESSION['user_id'] = $row['user_id'];
                // Respond with success
                $response = ["success" => true, "message" => "Login successful"];
            } else {
                // Invalid password
                echo $row['user_password'];
                $response = ["success" => false, "message" => "Invalid password"];
            }
        } else {
            // Username not found
            $response = ["success" => false, "message" => "No user found with that username"];
        }
    } else {
        $response = ["success" => false, "message" => "Username and password are required"];
    }

    echo json_encode($response);
}

$conn = null;
