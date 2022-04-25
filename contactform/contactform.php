<?php
require 'PHPMailer/PHPMailerAutoload.php';

/*$host		= 'YOUR_HOST';
$username	= 'USERNAME@DOMAIN.com';
$password	= 'YOUR_PASSWORD';*/

$host		= 'mail.codetowntechnologies.com';
$username	= 'info@codetowntechnologies.com';
$password	= 'aWVz.qzBsKm$';

$subject	= 'Contact Enquiry: ' . addslashes(strip_tags($_POST['subject']));

$send		= false;

$name		= addslashes(strip_tags($_POST['name']));
$email		= addslashes(strip_tags($_POST['email']));
$message	= addslashes(strip_tags($_POST['message']));

$htmlmessage = <<<MESSAGE
    <html>
    	<head>
            <title>$subject</title>
    	</head>

        <body>
            <p><strong>Name: </strong>$name</p>
            <p><strong>Email: </strong>$email</p>
            <p><strong>Message: </strong>$message</p>
        </body>
    </html>
MESSAGE;

$mail = new PHPMailer;

$mail->isSMTP();
$mail->SMTPAuth		= TRUE;
$mail->SMTPDebug	= 0;
$mail->Debugoutput	= 'html';
$mail->Host 		= $host;
$mail->Username 	= $username;
$mail->Password 	= $password;
$mail->setFrom($email, $name);
$mail->Port 		= 587;

// Add receive email address
$mail->addAddress('hr@codetowntechnologies.com','CodeTown Technologies');

$mail->isHTML(true);
$mail->Subject = $subject;
$mail->Body    = $htmlmessage;


if (!$mail->send()) {
    $send =  "Mailer Error: " . $mail->ErrorInfo;
} else {
    $send =  'OK';
}
/*
//send the message, check for errors
if ( $mail->send())
{
    $send = true;
}*/

echo $send;
//echo json_encode($send);
