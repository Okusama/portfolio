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
