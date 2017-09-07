'use strict';

var state;
/**
 * [Lancement de la page d'acceuil puis du menu]
 */
function applicationLaunch(){

        start();
        window.setTimeout(goToHome, 10000);

}

function displayRealisation(){

        goToRealisation();
        window.setTimeout(getPersoRealisation, 6000);

}

function onClickPersoRealisation(){

        $("#persoRealisation path").toggleClass("hidden");
        $("#coRealisation path").toggleClass("hidden");
        getPersoRealisation();

}

function onClickCoRealisation(){

        $("#coRealisation path").toggleClass("hidden");
        $("#persoRealisation path").toggleClass("hidden");
        getCoRealisation();

}

function displayProjects(){

        goToProjects();
        window.setTimeout(getNowProjects, 6000);

}

function onClickNowProjects(){

        $("#nowProjects path").toggleClass("hidden");
        $("#futurProjects path").toggleClass("hidden");
        getNowProjects();

}

function onClickFuturProjects(){

        $("#nowProjects path").toggleClass("hidden");
        $("#futurProjects path").toggleClass("hidden");
        getFuturProjects();

}

function addToClipBoard(){

        $('#formContact').append("<input id='tag_discord' value='Okusama#6915' />");

        var nameTag = $('#tag_discord');

        nameTag.select();

        $.when(document.execCommand('copy'))
                .then(function(bReturn) {

                if(bReturn){

                    //message de réussite
                    $(".copyText").fadeIn(500)
            			.animate({ opacity: 1})
            			.delay(1000)
            			.fadeOut(500);

                    $("#discord").fadeOut(200)
                                    .animate({opacity: 0})
                                    .delay(1200)
                                    .fadeIn(500)
                                    .animate({opacity: 1});

                    $( "#tag_discord" ).remove();

                } else {

                   //Echec de la copie, l'action est peut-être désactivé sur votre navigateur ?

                }

        });

}
