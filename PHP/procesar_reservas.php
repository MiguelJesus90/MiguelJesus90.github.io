<?php
// Importar la clase PHPMailer y sus excepciones
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Requerir el autoloader de PHPMailer
require '../PHPMailer/Exception.php';
require '../PHPMailer/PHPMailer.php';
require '../PHPMailer/SMTP.php';


// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "root";
$database = "Bar";

$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener datos del formulario para la reserva
$nombre = $_POST['nombre'];
$fecha = $_POST['fecha'];
$hora = $_POST['hora'];
$num_personas = $_POST['personas'];

// Preparar la consulta SQL para insertar la reserva
$sql_insert = "INSERT INTO Reservas (nombre, hora, fecha, num_personas) VALUES ('$nombre', '$hora', '$fecha', $num_personas)";

// Ejecutar la consulta de inserción
if ($conn->query($sql_insert) === TRUE) {
    echo "Reserva realizada correctamente";
    
    // Consulta SQL para obtener la información de las reservas
    $sql_select = "SELECT * FROM Reservas";
    $result = $conn->query($sql_select);
    
    // Verificar si hay resultados
    if ($result->num_rows > 0) {
        // Crear el contenido del correo
        $message = "Informacion de las reservas de los clientes del Bar de la Esquina:\n\n";
        while($row = $result->fetch_assoc()) {
            $message .= "Nombre: " . $row["nombre"] . "\n";
            $message .= "Fecha: " . $row["fecha"] . "\n";
            $message .= "Hora: " . $row["hora"] . "\n";
            $message .= "Nº de personas: " . $row["num_personas"] . "\n";
            $message .= "\n";
        }
        
        // Configurar PHPMailer
        $mail = new PHPMailer(true);
        try {
            // Configuración del servidor
            $mail->isSMTP();
            $mail->Host = 'smtp-mail.outlook.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'miguel_snake4@hotmail.com';
            $mail->Password = 'UT665m8x93a:Eix';
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;
            $mail->CharSet = 'UTF-8';
            $mail->Encoding = 'base64';

            // Configuración del correo electrónico
            $mail->setFrom('miguel_snake4@hotmail.com', 'Miguel');
            $mail->addAddress('miguel_snake4@hotmail.com');
            $mail->addAddress('miguelmotog90@gmail.com');
            $mail->addAddress('rosiguerreromorenovm28@gmail.com');
            $mail->isHTML(false);
            $mail->Subject = 'Reservas del Bar de la Esquina';
            $mail->Body = $message;

            // Enviar el correo
            $mail->send();
            echo "Correo enviado correctamente";
        } catch (Exception $e) {
            echo "Error al enviar el correo: {$mail->ErrorInfo}";
        }
    } else {
        echo "No se encontraron resultados en la base de datos";
    }
} else {
    echo "Error al realizar la reserva: " . $conn->error;
}

// Cerrar la conexión
$conn->close();

?>