import DOMTools from '../tools/dom_tools.js'
const tool = new DOMTools

import SessionTools from '../tools/session_tools.js'
const session = new SessionTools

export default class NavBar {


  loadNav() {
    let div    = tool.getElement('navbar')
    tool.clearElement(div)
    let home   = this.homeButton()
    div.appendChild(home)
    let search = this.searchArea()
    div.appendChild(search)
    let register = this.registerButton()
    div.appendChild(register)
    let sesh  = this.sessionButton()
    div.appendChild(sesh)
  }

  // ---- Home ----

  homeButton() {
    let span = this.navButton('home')
    let p    = this.buttonText("MovieMaze", "homeTitle")
    span.appendChild(p)
    return span
  }


  // ---- Search ----

  searchArea() {
    let span    = tool.newElement('span')
    tool.elementNames(span, 'searchContainer')

    let bar     = this.searchBar()
    span.appendChild(bar)

    let button  = this.navButton('searchButton')
    let go      = this.buttonText("Search", 'searchButtonText')
    button.appendChild(go)
    span.appendChild(button)

    return span
  }

  searchBar() {
    let bar           = tool.newElement('input');
    bar.type          = 'text';
    tool.elementNames(bar, 'search-bar', null)
    bar.placeholder   = 'Search a Title';
    return bar
  }


  // ---- Register ----

  registerButton() {
    if ( session.isLoggedIn() ) { return null }
    let span = this.navButton('register')
    let p    = this.buttonText('Register', 'registerText')
    span.appendChild(p)
    return span
  }


  // ---- Login ----

  sessionButton() {
    let span = this.navButton('register')
    if ( session.isLoggedIn() ) {
      var p    = this.buttonText('Logout', 'registerText')
    } else {
      var p    = this.buttonText('Login', 'registerText')
    }
    span.appendChild(p)
    return span
  }



  // ---- Tools ----

  navButton(id=null, className='navButton') {
    let span = tool.newElement('span')
    tool.elementNames(span, id, className)
    return span
  }

  buttonText(text, id=null) {
    let p       = tool.newElement('p')
    tool.elementNames(p , id, "navButtonText")
    p.innerHTML = text
    return p
  }



}
