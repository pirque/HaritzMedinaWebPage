/**
 * Created by Haritz Medina on 28/09/2014.
 */
"use strict";

var Controller = function(){};
Controller.prototype.initialize = function(){

    // Nav-bar item click control
    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

};