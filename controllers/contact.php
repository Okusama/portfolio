<?php
if (isset($_POST["name"], $_POST["mail"], $_POST["object"], $_POST["message"])){

        $name = htmlspecialchars($_POST["name"]);
        $mail = htmlspecialchars($_POST["mail"]);
        $object = htmlspecialchars($_POST["object"]);
        $message = htmlspecialchars($_POST["message"]);


        if (isset($_POST["send"])){

                saveMessage($db, $name, $mail, $object, $message);

        }

}
