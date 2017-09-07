'use strict';
/**
 * [Lancement des différente actions du site gérer par le Program]
 */
$(document).ready(function(){

        applicationLaunch();
        $("#main").on("click", "#returnHome", goToHome);

        $("#main").on("click", "#presentation", goToPresentation);
        
        $("#main").on("click", "#contact", goToContact);
        $("#main").on("click", "#discord", addToClipBoard);

        $("#main").on("click", "#realisation", displayRealisation);
        $("#main").on("click", "#persoRealisation", onClickPersoRealisation);
        $("#main").on("click", "#coRealisation", onClickCoRealisation);

        $("#main").on("click", "#projects", displayProjects);
        $("#main").on("click", "#nowProjects", onClickNowProjects);
        $("#main").on("click", "#futurProjects", onClickFuturProjects);


});
