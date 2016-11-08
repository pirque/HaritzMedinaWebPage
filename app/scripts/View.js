/**
 * Created by Haritz Medina on 28/09/2014.
 */
'use strict';

var View = function(){
  this.randomizeBackground();
};

View.prototype.container = 'main-container';
View.prototype.backgrounds = ['bg0.jpg', 'bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg'];

View.prototype.showContent = function (htmlContent, htmlContainer) {
    $('#'+htmlContainer).html(htmlContent);
};

View.prototype.randomizeBackground = function(){
  var randomBackground = this.backgrounds[Math.floor(Math.random()*this.backgrounds.length)];

  document.body.style.background = 'url(/images/'+randomBackground+') no-repeat center center fixed';
};
