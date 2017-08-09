<?php

$messages = getMessage($db);

foreach ($messages as $j) { ?>

        <ul>
                <li><?= $j["date"] ?></li>
                <li><?= $j["name"] ?></li>
                <li><?= $j["mail"] ?></li>
                <li><?= $j["object"] ?></li>
                <li><?= $j["content"] ?></li>
        </ul>

<?php } ?>
