<?php

require_once "../../../config/connectDB.php";
require_once "../../../src/request.php";

$realisation = getRealisation($db);

foreach ($realisation as $i) {

?>
        <article class="">
                <img src="<?= $i["lien"]; ?>" alt="Image de <?= $i["name"]; ?>">
                <p><?= $i["name"]; ?></p>
                <p><?= $i["description"]; ?></p>
        </article>

<?php } ?>
