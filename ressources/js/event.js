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

	$.get("ressources/template/public/realisation.html", ajaxGetHtmlRealisation);

}

function getPersoRealisation(){

        $.get("ressources/template/public/persorealisation.php", ajaxGetHtmlPersoRealisation);

}

function getCoRealisation(){

        $.get("ressources/template/public/corealisation.html", ajaxGetHtmlCoRealisation);

}

function goToProjects(){

	$.get("ressources/template/public/projects.html", ajaxGetHtmlProjects);

}

function getNowProjects(){

        $.get("ressources/template/public/nowprojects.html", ajaxGetHtmlNowProjects);

}

function getFuturProjects(){

        $.get("ressources/template/public/futurprojects.html", ajaxGetHtmlFuturProjects);

}
