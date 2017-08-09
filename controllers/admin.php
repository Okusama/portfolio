<?php

$uploadDirection = "ressources/upload/realisation";

if (isset($_FILES["urlImage"])) {

        if ($_FILES["urlImage"]["error"] == UPLOAD_ERR_OK) {

                $tmp_name = $_FILES["urlImage"]["tmp_name"];
                $name = $_FILES["urlImage"]["name"];
                move_uploaded_file($tmp_name, $uploadDirection."/".$name);

        }

}

if (isset($_POST["name"], $_POST["description"], $_POST["href"])){

        $name = htmlspecialchars($_POST["name"]);
        $description = htmlspecialchars($_POST["description"]);
        $href = htmlspecialchars($_POST["href"]);

        if (isset($_POST["send"])){

                saveRealisation($db, $name, $description, $href);

        }

}

require_once "ressources/template/admin/admin.phtml";
