<?php


$main = "ressources/template/realisation.phtml";
include "ressources/view/layout.phtml";

include_once "src/request.php";

if (isset($_POST["send"])){

        saveMessage($db, $_POST["name"], $_POST["mail"], $_POST["object"], $_POST["message"]);

}
