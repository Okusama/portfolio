<?php

include_once "config/connectDB.php";

function saveMessage($db, $name, $mail, $object, $content){

        $sources =
                " INSERT INTO `messages`(`name`, `mail`, `object`, `content`)
                VALUES (?, ?, ?, ?)";

        $query = $db->prepare($sources);
        $query->execute([$name, $mail, $object, $content]);

}

function getMessage($db){

        $sources =
                " SELECT `date`, `name`, `mail`, `object`, `content`
                FROM `messages`";

        $query = $db->prepare($sources);
        $query->execute();

        $display = $query->fetchAll(PDO::FETCH_ASSOC);

}

function saveRealisation($db, $name, $description, $urlLink){

        $sources = 
                " INSERT INTO `realisation`(`name`, `description`, `lien`)
                VALUES (?, ?, ?)";

        $query = $db->prepare($sources);
        $query->execute([$name, $description, $urlLink]);

}

function getRealisation($db){

        $sources = 
                " SELECT `name`, `description`, `urlLink`
                FROM `realisation`";

        $query = $db->prepare($sources);
        $query->execute();

        $display = $query->fetchAll(PDO::FETCH_ASSOC);

}
