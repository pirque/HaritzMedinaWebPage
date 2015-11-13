/**
 * Created by Haritz Medina on 28/09/2014.
 */
"use strict";

var Controller = function(){
    this.model = new Model();
};
Controller.prototype.initialize = function(){

    // Nav-bar item click control
    $(".nav a").bind("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    var model = this.model;
    // Nav-bar items content control
    $("a.barItem").bind("click", function(event){
        model.setPage(model.content.pages[event.toElement.id]);
    });

    // Load the home view
    this.model.setPage(this.model.content.pages.home);

};