<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
echo "0";
include 'dBConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();
var_dump($conn);

// Get the request method
$request_method = $_SERVER['REQUEST_METHOD'];

switch ($request_method) {
    case 'POST':
        // Handle POST request (insert a new user)
        $user_nama = $_POST['username'] ?? null;
        $user_email = $_POST['email'] ?? null;
        $user_password = $_POST['password'] ?? null;

        if ($user_nama && $user_email && $user_password) {
            // Check if username already exists
            $stmt = $conn->prepare("SELECT COUNT(*) as total FROM users WHERE user_nama = :user_nama");
            $stmt->bindParam(':user_nama', $user_nama);
            $stmt->execute();
            $existingUser = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($existingUser['total'] > 0) {
                $response = ['status' => 0, 'message' => 'Username already exists.'];
            } else {
                // Fetch the current count of records to create the new ID
                $stmt = $conn->query("SELECT COUNT(*) as total FROM users");
                $result = $stmt->fetch(PDO::FETCH_ASSOC);
                $newIdNumber = $result['total'] + 1;

                // Generate the user_id in the format C***
                $user_id = sprintf("C%03d", $newIdNumber); // "C" followed by 3 digits (e.g., C001)

                // Hash the password
                $hashed_password = password_hash($user_password, PASSWORD_DEFAULT);

                // Prepare SQL query to insert data into the 'users' table
                $sql = "INSERT INTO users(user_id, user_nama, user_email, user_password) 
                        VALUES(:user_id, :user_nama, :user_email, :user_password)";
                $stmt = $conn->prepare($sql);

                // Bind the form data to the query parameters
                $stmt->bindParam(':user_id', $user_id);
                $stmt->bindParam(':user_nama', $user_nama);
                $stmt->bindParam(':user_email', $user_email);
                $stmt->bindParam(':user_password', $hashed_password); // Store hashed password

                // Execute the query and check for success
                if ($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record created successfully.'];
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to create record.'];
                }
            }
        } else {
            // Handle missing form data
            $response = ['status' => 0, 'message' => 'Incomplete form data.'];
        }

        // Send the JSON response
        echo json_encode($response);
        echo "insertion complete";
        break;
}
