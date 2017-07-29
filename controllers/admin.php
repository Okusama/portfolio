<?php


require_once "src/request.php";


$uploadDirection = "ressources/upload/realisation";

if (isset($_FILES["urlImage"])) {

        if ($_FILES["urlImage"]["error"] == UPLOAD_ERR_OK) {

                $tmp_name = $_FILES["urlImage"]["tmp_name"];
                $name = $_FILES["urlImage"]["name"];
                move_uploaded_file($tmp_name, $uploadDirection."/".$name);

        }

}

if (isset($_POST["name"], $_POST["description"], $_POST["urlLink"])){

        $name = htmlspecialchars($_POST["name"]);
        $description = htmlspecialchars($_POST["description"]);
        $urlLink = htmlspecialchars($_POST["urlLink"]);

        if (isset($_POST["send"])){

                saveRealisation($db, $name, $description, $urlLink);

        }

}

require_once "ressources/view/layoutadmin.phtml";
