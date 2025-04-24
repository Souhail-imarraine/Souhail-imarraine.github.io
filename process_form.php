<?php
header('Content-Type: application/json');

// Get form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Validate inputs
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (empty($message)) {
    $errors[] = 'Message is required';
}

// If there are errors, return them
if (!empty($errors)) {
    echo json_encode([
        'status' => 'error',
        'message' => implode(', ', $errors)
    ]);
    exit;
}

// Here you would typically send an email or store the message
// For this example, we'll just simulate success
$response = [
    'status' => 'success',
    'message' => 'Thank you for your message! I will get back to you soon.'
];

echo json_encode($response);
?> 