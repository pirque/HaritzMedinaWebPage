/**
 * Created by Haritz Medina on 28/09/2014.
 */
'use strict';

var Controller = function(){

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
      HaritzMedina.model.setPage(HaritzMedina.model.content.pages[event.toElement.id]);
    }
  });

  // Add event for cookies icon
  $('.cc_more_info').bind('click', function(){
    HaritzMedina.model.setPage(HaritzMedina.model.content.pages['cookies']);
  })

  // TODO Load the view of the url
  var selectedPage = window.location.hash.substr(1);
  if($.isEmptyObject(selectedPage)){
    selectedPage = 'home';
  }
  HaritzMedina.model.setPage(HaritzMedina.model.content.pages[selectedPage]);

  HaritzMedina.view.randomizeBackground();


};
