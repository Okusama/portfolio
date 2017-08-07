'use strict';

/**
 * [Requête de la page welcome]
 */
function start(){

        $.get("ressources/template/public/welcome.html", ajaxGetHtmlWelcome)

}

/**
 * [Requête de la page home]
 */
function goToHome(){

        $.get("ressources/template/public/home.html", ajaxGetHtmlHome);

}

function goToPresentation(){

        $.get("ressources/template/public/presentation.html", ajaxGetHtmlPresentation);

}

function goToContact(){

	$.get("ressources/template/public/contact.html", ajaxGetHtmlContact);

}

function goToRealisation(){

	$.get("ressources/template/public/realisation.html.php", ajaxGetHtmlRealisation);

}

function goToProject(){

	$.get("ressources/template/public/project.phtml", ajaxGetHtmlProject);

}
