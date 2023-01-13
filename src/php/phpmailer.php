<?php

use PHPMailer\PHPMailer\PHPMailer;
require('..\..\vendor\autoload.php');

function sendEmail($name, $email, $message){

    //Configurando el servidor
    $phpmailer = new PHPMailer();
    $phpmailer->isSMTP();
    $phpmailer->Host = 'smtp.hostinger.com';
    $phpmailer->SMTPAuth = true;
    $phpmailer->Port = 465;
    $phpmailer->Username = 'contacto@gabodev.online';
    $phpmailer->Password = '78235514Ab!';
    $phpmailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;  

    //Configurando los destinatarios
    $phpmailer->setFrom('contacto@gabodev.online', 'GaboDev.online');
    //Opcional: se puede agregar destinarios
    //como por ejemplo para enviar una copia del
    //mensaje que el usuario envió.
    $phpmailer->addAddress($email, $name);

    $phpmailer->isHTML(false);
    $phpmailer->Body = $message;

    $phpmailer->send();

    if($phpmailer->send())
        echo json_encode("success");
    else
        echo json_encode("failure");

    
}
