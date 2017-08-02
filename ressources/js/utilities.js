'use strict';

var state;
/**
 * [Lancement de la page d'acceuil puis du menu]
 */
function applicationLaunch(){

        start();
        window.setTimeout(goToHome, 10000);

}

function addToClipBoard(){

	$(".copyText").fadeIn(500)
			.animate({ opacity: 1})
			.delay(1000)
			.fadeOut(500);

	const NAMETAG = "Okusama#6915";

	NAMETAG.select();
	document.execCommand("copy");

}

function pageState(){

	if (performance.navigation.type == 1){

		switch (state){

			case "home":

				goToHome();

			break;

			case "presentation":

				goToPresentation();

			break;

			case "realisation":

				goToRealisation();

			break;

			case "project":

				goToProject();

			break;

			case "contact":

				goToContact();

			break;

		}

	}

}