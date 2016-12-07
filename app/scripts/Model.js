'use strict';

let Model = function(){
    this.content = new Model.content();
};


Model.content = function() {
    this.folder = 'templates';
    this.pages = {
      home: 'home.html',
      career: 'career.html',
      projects: 'projects.html',
      media: 'media.html',
      about: 'about.html',
      cookies: 'cookies.html'
    };
    this.languages = {
      es_ES: 'es_ES',
      en_GB: 'en_GB'
    }
};

Model.prototype.getPageURI = function(pageName){
  // Check language cookie
  let language = this.getUserLanguage();
  if(!language){
    language = 'es_ES'; // Default language Spanish
  }
  return this.content.folder+'/'+language+'/'+this.content.pages[pageName];

};

Model.prototype.setPage = function(page){
    // Retrieve page template
    let retrievePromise = this.retrievePage(page);
    // Call view to set the selected template
    $.when(retrievePromise).done(function(htmlPage){
        HaritzMedina.view.showContent(htmlPage, HaritzMedina.view.container);
    });
};

Model.prototype.setUserLanguage = function(language){
  this.cookies.createCookie('lang', language);
};

Model.prototype.getUserLanguage = function(){
  return this.cookies.readCookie('lang');
};

Model.prototype.retrievePage = function(page){
    return $.get(page);
};

Model.prototype.cookies = {};

Model.prototype.cookies.createCookie = function(name,value,days) {
  let expires = '';
  if (days) {
    let date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = '; expires='+date.toGMTString();
  }

  document.cookie = name+'='+value+expires+'; path=/';
};

Model.prototype.cookies.readCookie = function(name){
  let nameEQ = name + '=';
  let ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++){
    let c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if(c.indexOf(nameEQ) == 0){
      return c.substring(nameEQ.length,c.length);
    }
  }
  return null;
};

Model.prototype.cookies.eraseCookie = function(name){
  this.createCookie(name,'',-1);
};
