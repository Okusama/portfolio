<?php



$main = "ressources/template/public/realisation.phtml";
include_once "ressources/view/layout.phtml";

include_once "src/request.php";

$name = htmlspecialchars($_POST["name"]);
$mail = htmlspecialchars($_POST["mail"]);
$object = htmlspecialchars($_POST["object"]);
$message = htmlspecialchars($_POST["message"]);


if (isset($_POST["send"])){

        saveMessage($db, $name, $mail, $object, $message);

}
