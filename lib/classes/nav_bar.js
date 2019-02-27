
import DOMTools     from '../tools/dom_tools.js'
import SessionTools from '../tools/session_tools.js'
import SearchTitles from '../services/search_titles.js'
import SessionForm from '../classes/session_form.js'
// import TitleResults from '../classes/title_results.js'

export default class NavBar {

  constructor() {
    this.tool    = new DOMTools
    this.session = new SessionTools
    // this.form    = new SessionForm
    // this.search  = new SearchTitles
    // this.results = new TitleResults
  }


  loadNav() {
    let div    = this.tool.getElement('navbar')
    this.tool.clearElement(div)
    let home   = this.homeButton()
    div.appendChild(home)
    let search = this.searchArea()
    div.appendChild(search)
    let register = this.registerButton()
    if (register) {div.appendChild(register)}
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
    let span    = this.tool.newElement('span')
    this.tool.elementNames(span, 'searchContainer')

    let bar     = this.searchBar()
    span.appendChild(bar)

    let button  = this.navButton('searchButton')
    let go      = this.buttonText("Search", 'searchButtonText')
    button.appendChild(go)
    span.appendChild(button)

    button.addEventListener('click', function() {
      let titles = new SearchTitles
      titles.get_titles()
    } )
    return span
  }

  searchBar() {
    let bar           = this.tool.newElement('input');
    bar.type          = 'text';
    this.tool.elementNames(bar, 'search-bar', null)
    bar.placeholder   = 'Search a Title';
    return bar
  }

  searchTerm() {
    let term = this.tool.getElement('search-bar').value
    return term
  }


  // ---- Register ----

  registerButton() {
    if ( this.session.isLoggedIn() ) { return null }
    let span = this.navButton('register')

    span.addEventListener('click', function() {
      let form = new SessionForm
      form.loadRegister()
     })

    let p    = this.buttonText('Register', 'registerText')
    span.appendChild(p)
    return span
  }


  // ---- Login ----

  sessionButton() {
    var span = this.navButton('register')
    if ( this.session.isLoggedIn() ) {
      var p    = this.buttonText('Logout', 'registerText')

      span.addEventListener('click', function() {
        sessionStorage.clear()
        let nav = new NavBar
        nav.loadNav()
       })

    } else {
      var p    = this.buttonText('Login', 'registerText')

      span.addEventListener('click', function() {
        let form = new SessionForm
        form.loadLogin()
       })

    }
    span.appendChild(p)
    return span
  }



  // ---- Tools ----

  navButton(id=null, className='navButton') {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, id, className)
    return span
  }

  buttonText(text, id=null) {
    let p       = this.tool.newElement('p')
    this.tool.elementNames(p , id, "navButtonText")
    p.innerHTML = text
    return p
  }



}
