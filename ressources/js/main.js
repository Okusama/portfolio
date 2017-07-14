'use strict';
/**
 * [Lancement des différente actions du site gérer par le Program]
 */
$(document).ready(function(){

        applicationLaunch();
        $("#main").on("click", "#returnHome", goToHome);
        $("#main").on("click", "#presentation", goToPresentation);
        $("#main").on("click", "#contact", goToContact);
        $("#discord").on("click", addToClipBoard);
        $("#main").on("click", "#realisation", goToRealisation);
        $("#main").on("click", "#discord", addToClipBoard);


});
