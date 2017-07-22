<?php

$main = "ressources/template/admin/admin.phtml";
include_once "ressources/view/layout.phtml";

$uploadDirection = "ressources/upload/realisation";


if ($_FILES["urlImage"]["error"] == UPLOAD_ERR_OK) {

        $tmp_name = $_FILES["urlImage"]["tmp_name"];
        $name = $_FILES["urlImage"]["name"];
        move_uploaded_file($tmp_name, $uploadDirection."/".$name);

}
