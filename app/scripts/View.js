/**
 * Created by Haritz Medina on 28/09/2014.
 */
'use strict';

let View = function(){
  this.calculateBackgroundSize()
  this.randomizeBackground();
  this.currentDir = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
};

View.prototype.container = 'main-container';
View.prototype.backgrounds = ['bg0.jpg', 'bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg'];

View.prototype.showContent = function (htmlContent, htmlContainer) {
    $('#'+htmlContainer).html(htmlContent);
};

View.prototype.randomizeBackground = function(){
  let randomBackground = this.backgrounds[Math.floor(Math.random()*this.backgrounds.length)];
  document.body.style.backgroundImage = 'url(' +
    this.currentDir + '/images/' + this.size + '/' + randomBackground + ')';
};

View.prototype.calculateBackgroundSize = function () {
  let maxSize = Math.max(window.screen.availHeight, window.screen.availWidth)
  if (maxSize <= 720) {
    this.size = 'small'
  } else if (maxSize <= 1080) {
    this.size = 'medium'
  } else {
    this.size = 'big'
  }
}
