<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger y limpiar los datos del formulario
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Configuración del correo
    $to = "tu-email@dominio.com"; // Reemplaza con tu dirección de correo electrónico
    $subject = "Nuevo mensaje de contacto";
    $body = "Nombre: $name\nCorreo Electrónico: $email\n\nMensaje:\n$message";
    $headers = "From: $email\r\n";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado exitosamente.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>