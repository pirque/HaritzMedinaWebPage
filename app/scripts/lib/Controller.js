/**
 * Created by Haritz Medina on 09/28/2014. Last update 07/17/2019.
 */

'use strict'

const Model = require('./Model')
const View = require('./View')

class Controller {
  constructor (props) {
    this.model = null
    this.view = null
  }

  initialize () {
    // Initialize model and view
    this.view = new View()
    this.model = new Model({ view: this.view })

    // Nav-bar items content control
    document.querySelectorAll('a.barItem').forEach((elem) => {
      elem.addEventListener('click', (event) => {
        this.setPageById(event.target.id)
      })
    })

    // Nav-bar language items content control
    document.querySelectorAll('a.langItem').forEach((elem) => {
      elem.addEventListener('click', (event) => {
        if (this.model.languages[event.target.id]) {
          // Set cookies and reload web
          this.model.setUserLanguage(event.target.id)
          window.location.reload()
        }
      })
    })

    // Add event for cookies icon
    const cookiesMoreInfoElement = document.querySelector('.cc_more_info')
    if (cookiesMoreInfoElement instanceof window.HTMLElement) {
      cookiesMoreInfoElement.addEventListener('click', () => {
        this.model.setPage(this.model.getPageURI('cookies'))
      })
    }

    // Load the view of the url
    let selectedPage = window.location.hash.substr(1)
    if (typeof selectedPage !== 'string' || selectedPage.length < 1) {
      selectedPage = 'home'
    }
    this.setPageById(selectedPage)
  }

  setPageById (id) {
    if (this.model.pages[id]) {
      const pageURI = this.model.getPageURI(id)
      if (pageURI !== undefined) {
        this.model.setPage(pageURI)
        // Update url
        window.location.hash = '#' + id
      } else {
        window.alert('Unable to website page, make sure the URL is correct.')
        window.location.reload('/')
      }
    } else {
      window.alert('Unable to website page, make sure the URL is correct.')
      window.location.replace(window.location.origin)
    }
  }
}

module.exports = Controller
