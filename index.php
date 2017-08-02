<?php

session_start();

require_once "src/request.php";
require_once "controllers/contact.php";

$accessAdmin = ["admin"];

if(isset($_GET["admin"])) {

	$page = "login";

	if(isset($_SESSION["admin"])) {

		if(in_array($_GET["admin"], $accessAdmin)) {

			$page = $_GET["admin"];

		}

	}

}

if(isset($_POST["action"])) {

	if($_POST["action"] === "login") {

		require_once "controllers/connexion_user.php";

	}

}

$realisation = getRealisation($db);

require_once "ressources/view/layout.phtml";
