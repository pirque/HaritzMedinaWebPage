/**
 * Created by Haritz Medina on 28/09/2014.
 */
'use strict';

var Model = function(){
    this.content = new Model.content();
};

Model.content = function() {
    this.folder = 'templates/';
    this.pages = {
      home: this.folder + 'home.html',
      career: this.folder + 'career.html',
      projects: this.folder + 'projects.html',
      about: this.folder + 'about.html',
      cookies: this.folder + 'cookies.html'
    };
};

Model.prototype.setPage = function(page){
    // Retrieve page template
    var retrievePromise = this.retrievePage(page);
    // Call view to set the selected template
    $.when(retrievePromise).done(function(htmlPage){
        HaritzMedina.view.showContent(htmlPage, HaritzMedina.view.container);
    });
};

Model.prototype.retrievePage = function(page){
    return $.get(page);
};
