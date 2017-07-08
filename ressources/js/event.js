'use strict';

/**
 * [Requête de la page welcome]
 */
function start(){

        $.get("ressources/template/welcome.html", ajaxGetHtmlWelcome)

}

/**
 * [Requête de la page home]
 */
function goToHome(){

        $.get("ressources/template/home.html", ajaxGetHtmlHome);

}

function goToPresentation(){

        $.get("ressources/template/presentation.html", ajaxGetHtmlPresentation);

}

