'use strict';

let Controller = function(){

};
Controller.prototype.initialize = function(){

  // Nav-bar item click control
  $('.nav a').bind('click', function(){
    $('.nav').find('.active').removeClass('active');
    $(this).parent().addClass('active');
  });

  // Nav-bar items content control
  $('a.barItem').bind('click', function(event){
    if(HaritzMedina.model.content.pages[event.toElement.id]){
      HaritzMedina.model.setPage(HaritzMedina.model.getPageURI(event.toElement.id));
    }
  });

  // Nav-bar language items content control
  $('a.langItem').bind('click', function(event){
    if(HaritzMedina.model.content.languages[event.toElement.id]){
      // Set cookies and reload web
      HaritzMedina.model.setUserLanguage(event.toElement.id);
      window.location.reload();
    }
  });

  // Add event for cookies icon
  $('.cc_more_info').bind('click', function(){
    HaritzMedina.model.setPage(HaritzMedina.model.getPageURI('cookies'));
  });

  // Load the view of the url
  let selectedPage = window.location.hash.substr(1);
  if($.isEmptyObject(selectedPage)){
    selectedPage = 'home';
  }
  HaritzMedina.model.setPage(HaritzMedina.model.getPageURI(selectedPage));

  HaritzMedina.view.randomizeBackground();
};
