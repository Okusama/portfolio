<?php

$main = "ressources/template/admin/admin.phtml";
include_once "ressources/view/layout.phtml";

if ($_FILES['icone']['error'] > 0){

	echo "Erreur lors du transfert";

}