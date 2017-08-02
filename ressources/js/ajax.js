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
                .fadeIn(1)
                .attr("data-indice", "home");

	

}

function ajaxGetHtmlPresentation(reponse) {

	var state = "presentation"

        $("#main").html(reponse);

}

function ajaxGetHtmlContact(reponse) {

	var state = "contact"

	$("#main").html(reponse);
        $('#formContact button[name="send"]').on('click', function(e){
            e.preventDefault();
        });


}

function ajaxGetHtmlRealisation(reponse){

	var state = "realisation"

	$("#main").html(reponse);

}

function ajaxGetHtmlProject(reponse){

	var state = "project"

	$("#main").html(reponse);

}
