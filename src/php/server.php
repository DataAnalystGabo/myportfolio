<?php

require('phpmailer.php');

//Creamos las funciones necesarias.
//Función que sanitiza y escapa los datos.
function sanitizer($input){
    return htmlentities(addslashes($input), ENT_QUOTES);
}

//Función que verifica si el envío está vacío o no.
function validator_empty($name, $email, $message){
    return !empty($name) && !empty($email) && !empty($message);
}

//Función que valida la correcta estructura del email.
function validator_email($email){
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}


if(isset($_POST) && validator_empty(...$_POST)){

    //Declaramos variables y las sanitizamos
    $name    = sanitizer($_POST['name']);
    $email   = sanitizer($_POST['email']);
    $message = sanitizer($_POST['message']);

    //establecemos un nuevo condicional
    //para validar la estructura del email ingresado.
    if(validator_email($email)) {

        sendEmail($name, $email, $message);

    }else{

        echo json_encode("invalid-email");
    }


}else {

    echo json_encode("empty-inputs");
}
