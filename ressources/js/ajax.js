'use strict';

/**
 * [Affichage de la page welcome]
 * @param  {[type]} reponse [appel de la requête]
 */
function ajaxGetHtmlWelcome(reponse) {

        $("#main").html(reponse)
                .delay(8000)
                .fadeOut(2000);

}

/**
 * [Affichage de la page welcome]
 * @param  {[type]} reponse [appel de la requête]
 */
function ajaxGetHtmlHome(reponse) {

        $("#main").html(reponse)
                .fadeIn(1);

}

function ajaxGetHtmlPresentation(reponse) {

        $("#main").html(reponse);

}
