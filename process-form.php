<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("Método no permitido");
}

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");

if ($name === "" || $message === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit("Datos inválidos");
}

// Aquí puedes guardar el mensaje o enviarlo mediante una biblioteca de correo.
// mail($destinatario, $asunto, $message, $headers);

echo "Mensaje enviado";
