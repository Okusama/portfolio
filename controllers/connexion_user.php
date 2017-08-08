<?php

if (isset($_POST["pseudo"], $_POST["password"])){

        $pseudo = htmlspecialchars($_POST["pseudo"]);
        $password = htmlspecialchars($_POST["password"]);


        $verif = connectAdmin($db, $pseudo, $password);

        if (($verif[0]["pseudo"] === $pseudo) && password_verify( $password, $verif[0]["password"])) {

                $_SESSION['admin'] = "";
        	header("Location: index.php?admin=admin");
        	exit;

        } else {

                header("Location: index.php");

        }

}
