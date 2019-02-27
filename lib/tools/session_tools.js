

import DOMTools     from '../tools/dom_tools.js'
import SessionService from '../services/session_service.js'
import NavBar from '../classes/nav_bar.js'
import Welcome from '../classes/welcome.js'


export default class SessionTools {

  constructor() {
    this.tool = new DOMTools
  }


  token() {
    return sessionStorage['token'] || null
  }

  isLoggedIn() {
    return (this.token() != null || this.token() != undefined)
  }

  setToken(token) {
    sessionStorage['token'] = token
  }

  clearMovies() {
    let token = this.token()
    sessionStorage.clear()
    if (token) {this.setToken(token)}
  }


  getRegisterInfo() {
    let email = this.tool.getElement('Email').value
    let user = this.tool.getElement('Username').value
    let pw = this.tool.getElement('Password').value
    let pwConf = this.tool.getElement('PasswordConf').value

    let obj = {
      'email': email,
      'username': user,
      'password': pw,
      'password_confirmation': pwConf,
    }
    return obj
  }

  getLoginInfo() {
    let user = this.tool.getElement('Username').value
    let pw = this.tool.getElement('Password').value

    let obj = {
      'username': user,
      'password': pw,
    }
    return obj
  }

  signup() {
    let obj = this.getRegisterInfo()
    let sesh = new SessionService
    sesh.register(obj)

    let nav = new NavBar
    nav.loadNav()

    let welc = new Welcome
    welc.loadWelcome()

  }

  login() {
    let obj = this.getLoginInfo()
    let sesh = new SessionService
    sesh.login(obj)

    let nav = new NavBar
    nav.loadNav()

    let welc = new Welcome
    welc.loadWelcome()

  }





}
