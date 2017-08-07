<?php
if (isset($_POST["name"], $_POST["mail"], $_POST["object"], $_POST["content"])){


        $name = htmlspecialchars($_POST["name"]);
        $mail = htmlspecialchars($_POST["mail"]);
        $object = htmlspecialchars($_POST["object"]);
        $content = htmlspecialchars($_POST["content"]);

        saveMessage($db, $name, $mail, $object, $content);

}
