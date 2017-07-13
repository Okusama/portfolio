<?php


<<<<<<< HEAD
$main = "ressources/template/public/realisation.phtml";
include_once "ressources/view/layout.phtml";
=======
$main = "ressources/template/realisation.phtml";
include "ressources/view/layout.phtml";
>>>>>>> 20d9858dc7a6397f8f7b7ed31b1df5f6b12270e0

include_once "src/request.php";

if (isset($_POST["send"])){

        saveMessage($db, $_POST["name"], $_POST["mail"], $_POST["object"], $_POST["message"]);

}
