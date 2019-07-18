/**
 * Created by Haritz Medina on 09/28/2014. Last update 07/17/2019.
 */

'use strict'

const View = require('./View')

class Model {
  constructor ({ view }) {
    this.view = view || new View()
    this.folder = 'templates'
    this.pages = {
      home: 'home.html',
      aboutme: 'aboutme.html',
      projects: 'projects.html',
      research: 'research.html',
      contributions: 'contributions.html',
      cookies: 'cookies.html'
    }
    this.languages = {
      es_ES: 'es_ES',
      en_GB: 'en_GB'
    }
    this.cookies = new Cookies()
  }

  getPageURI (pageName) {
    // Check language cookie
    let language = this.getUserLanguage()
    if (!language) {
      language = this.getUserDefaultLanguage()
      if (!language) {
        language = 'en_GB' // Default language English
      }
    }
    return this.folder + '/' + language + '/' + this.pages[pageName]
  }

  setPage (page) {
    // Retrieve page template
    fetch(page)
      .then((response) => {
        return response.text()
      }).then((html) => {
        this.view.showContent(html, View.container)
      })
      .catch(() => {
        window.alert('Unable to load webpage section or section does not exist.')
      })
  }

  setUserLanguage (language) {
    this.cookies.createCookie('lang', language)
  }

  getUserLanguage () {
    return this.cookies.readCookie('lang')
  }

  getUserDefaultLanguage () {
    return Object.values(this.languages).find((lang) => {
      return lang.includes(window.navigator.language.split('-')[0])
    })
  }
}

class Cookies {
  createCookie (name, value, days) {
    let expires = ''
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
      expires = '; expires=' + date.toGMTString()
    }

    document.cookie = name + '=' + value + expires + '; path=/'
  }

  readCookie (name) {
    const nameEQ = name + '='
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length)
      }
    }
    return null
  }

  eraseCookie (name) {
    this.createCookie(name, '', -1)
  }
}

module.exports = Model
