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

function ajaxGetHtmlContact(reponse) {

	$("#main").html(reponse);
        $("#formContact").submit(function(event){

                event.preventDefault();

                $.post("index.php", $("#formContact").serialize(), function(data){

                        $("#formMessage").html("Le message a bien été envoyé");
                        $("input, textarea").val("");

                })
                .fail(function(){

                        $("#formMessage").html("Une erreur est survenue");

                });

        });

}

function ajaxGetHtmlRealisation(reponse){

	$("#main").html(reponse);

}

function ajaxGetHtmlProject(reponse){

	$("#main").html(reponse);

}
