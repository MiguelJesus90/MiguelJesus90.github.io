<?php
// Importar la clase PHPMailer y sus excepciones
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Requerir el autoloader de PHPMailer
require '../PHPMailer/Exception.php';
require '../PHPMailer/PHPMailer.php';
require '../PHPMailer/SMTP.php';


// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    
    // Include the email in a separate paragraph
    $mensaje .= "<br><br><br>Cliente: " . $nombre . "<br><br>Email: " . $email;

    // Instantiate PHPMailer
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp-mail.outlook.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'miguel_snake4@hotmail.com';
        $mail->Password = 'UT665m8x93a:Eix';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        //Recipients
        $mail->setFrom('miguel_snake4@hotmail.com', 'Bar de la Esquina');
        $mail->addAddress('rosiguerreromorenovm28@gmail.com', 'Rosi');

        //Content
        $mail->isHTML(true);
        $mail->Subject = 'Subject';
        $mail->Body = $mensaje;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>