<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

include 'dBConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

// Get the request method
$request_method = $_SERVER['REQUEST_METHOD'];

switch ($request_method) {
    case 'POST':
        // Handle POST request (insert a new user)
        $user_nama = $_POST['username'] ?? null;
        $user_email = $_POST['email'] ?? null;
        $user_password = $_POST['password'] ?? null;
        $user_image = $_FILES['image']['tmp_name'] ?? null; // Handle the image upload

        if ($user_nama && $user_email && $user_password && $user_image) {
            // Read the image file contents
            $imageData = file_get_contents($user_image);

            // Fetch the current count of records to create the new ID
            $stmt = $conn->query("SELECT COUNT(*) as total FROM users");
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            $newIdNumber = $result['total'] + 1;

            // Generate the user_id in the format C***
            $user_id = sprintf("C%03d", $newIdNumber); // "C" followed by 3 digits (e.g., C001)

            // Hash the password
            $hashed_password = password_hash($user_password, PASSWORD_DEFAULT);

            // Prepare SQL query to insert data into the 'users' table
            $sql = "INSERT INTO users(user_id, user_nama, user_email, user_password, user_image) 
                    VALUES(:user_id, :user_nama, :user_email, :user_password, :user_image)";
            $stmt = $conn->prepare($sql);

            // Bind the form data to the query parameters
            $stmt->bindParam(':user_id', $user_id);
            $stmt->bindParam(':user_nama', $user_nama);
            $stmt->bindParam(':user_email', $user_email);
            $stmt->bindParam(':user_password', $hashed_password); // Store hashed password
            $stmt->bindParam(':user_image', $imageData, PDO::PARAM_LOB); // bind image as BLOB

            // Execute the query and check for success
            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
        } else {
            // Handle missing form data
            $response = ['status' => 0, 'message' => 'Incomplete form data.'];
        }

        // Send the JSON response
        echo json_encode($response);
        break;

    case 'GET':
        // GET request logic will be implemented later
        echo json_encode(['message' => 'GET method to be implemented later']);
        break;

    case 'DELETE':
        // DELETE request logic will be implemented later
        echo json_encode(['message' => 'DELETE method to be implemented later']);
        break;

    default:
        // Handle invalid request method
        echo json_encode(['status' => 0, 'message' => 'Invalid request method']);
        break;
}
