/**
 * Created by Haritz Medina on 09/28/2014. Last update 07/17/2019.
 */

'use strict'

class View {
  constructor () {
    this.calculateBackgroundSize()
    this.currentDir = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'))
    this.randomizeBackground()
  }

  calculateBackgroundSize () {
    const maxSize = Math.max(window.screen.availHeight, window.screen.availWidth)
    if (maxSize <= 720) {
      this.size = 'small'
    } else if (maxSize <= 1080) {
      this.size = 'medium'
    } else {
      this.size = 'big'
    }
  }

  randomizeBackground () {
    const randomBackground = View.backgrounds[Math.floor(Math.random() * View.backgrounds.length)]
    document.body.style.backgroundImage = 'url(' +
      this.currentDir + '/images/' + this.size + '/' + randomBackground + ')'
  }

  showContent (htmlContent, htmlContainer) {
    document.querySelector('#' + htmlContainer).innerHTML = htmlContent
  }
}

View.container = 'main-container'
View.backgrounds = ['bg0.jpg', 'bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg']

module.exports = View
