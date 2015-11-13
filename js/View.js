/**
 * Created by Haritz Medina on 28/09/2014.
 */
"use strict";

var View = function(){};

View.prototype.container = "main-container";

View.prototype.showContent = function (htmlContent, htmlContainer) {
    $("#"+htmlContainer).html(htmlContent);
};