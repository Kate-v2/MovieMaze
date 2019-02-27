import DOMTools from '../tools/dom_tools.js'
const tool = new DOMTools

import SessionTools from '../tools/session_tools.js'
const session = new SessionTools

export default class Welcome {

  loadWelcome() {
    let div = tool.getElement('content')
    tool.clearElement(div)

    let p1 = this.welcomeText( this.p1(), 'p1')
    div.appendChild(p1)

    let p2 = this.welcomeText( this.p2(), 'p2')
    div.appendChild(p2)

    let p3 = this.welcomeText( this.p3(), 'p3')
    div.appendChild(p3)

    let p4 = this.welcomeText( this.p4(), 'p4')
    div.appendChild(p4)
  }

  welcomeText(text, id=null) {
    let p = tool.newElement('p')
    p.innerHTML = text
    tool.elementNames(p, id, 'WelcomeText')
    return p
  }


  p1() {
    return "Welcome to MovieMaze!"
  }

  p2() {
    return "Use this app to find movies/shows by title, see details about them, and find out where they're streaming!"
  }

  p3() {
    return "Register or Login to create favorites & a watchlist."
  }

  p4() {
    return ("To get started, use the search bar to find a movie or show title. When you get to the results, please pick the correct title.")
  }

}
