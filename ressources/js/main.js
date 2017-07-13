'use strict';
/**
 * [Lancement des différente actions du site gérer par le Program]
 */
$(document).ready(function(){

        applicationLaunch();
        $("#main").on("click", "#returnHome", goToHome);
        $("#main").on("click", "#presentation", goToPresentation);
        $("#main").on("click", "#contact", goToContact);
<<<<<<< HEAD
        $("#discord").on("click", addToClipBoard);
        $("#main").on("click", "#realisation", goToRealisation);
=======
        $("#main").on("click", "#discord", addToClipBoard);
>>>>>>> 20d9858dc7a6397f8f7b7ed31b1df5f6b12270e0

});
