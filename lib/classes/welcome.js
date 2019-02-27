import DOMTools from '../tools/dom_tools.js'

export default class Welcome {

  constructor(){
    this.tool = new DOMTools
  }

  loadWelcome() {
    let div = this.tool.getElement('content')
    this.tool.clearElement(div)

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
    let p = this.tool.newElement('p')
    p.innerHTML = text
    this.tool.elementNames(p, id, 'WelcomeText')
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
