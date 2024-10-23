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
        // Get the next user ID
        $stmt = $conn->query("SELECT COUNT(*) as total FROM users");
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $newIdNumber = $result['total'] + 1;

        // Function to check if user_id exists
        function idExists($conn, $id) {
            $stmt = $conn->prepare("SELECT COUNT(*) FROM users WHERE user_id = ?");
            $stmt->execute([$id]);
            return $stmt->fetchColumn() > 0;
        }

        // Initialize user_id and check for uniqueness
        $user_id = sprintf("C%03d", $newIdNumber);
        while (idExists($conn, $user_id)) {
            $newIdNumber++; // Increment to find the next unique ID
            $user_id = sprintf("C%03d", $newIdNumber); // Reformat the new ID
        }

        // Hash the password
        $hashed_password = password_hash($user_password, PASSWORD_DEFAULT);

        // Prepare the SQL query for insertion
        $sql = "INSERT INTO users (user_id, user_nama, user_email, user_password) 
                VALUES (:user_id, :user_nama, :user_email, :user_password)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':user_id', $user_id);
        $stmt->bindParam(':user_nama', $user_nama);
        $stmt->bindParam(':user_email', $user_email);
        $stmt->bindParam(':user_password', $hashed_password);

        // Execute the query
        if ($stmt->execute()) {
            $response = ["status" => 1, "message" => "Record created successfully."];
        } else {
            $response = ["status" => 0, "message" => "Failed to create record."];
        }
    }
} else {
    $response = ["status" => 0, "message" => "Incomplete form data."];
}

echo json_encode($response);
