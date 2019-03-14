
import DOMTools      from '../tools/dom_tools.js'
import SessionTools  from '../tools/session_tools.js'
// import Movie     from '../classes/movie.js'
import MovieService from '../services/movie_service.js'

export default class TitleResults {

  constructor() {
    this.tool    = new DOMTools
  }

  loadResults(data) {
    let div = this.tool.getElement('content')
    this.tool.clearElement(div)
    this.render_term(   data['term'],    div )
    data['results'].length == 0 ? this.renderNoTitles(div) : this.render_titles(data['results'], div)
  }

  // ---- Search Term ----

  render_term(term, element) {
    let title = this.tool.newElement('div')
    this.tool.elementNames(title, 'ResultsPageSearchTerm')

    let p = this.tool.newElement('p')
    this.tool.elementNames(p, 'SearchTerm')
    let text = `Search Term: ${term}`
    p.innerHTML = text

    title.appendChild(p)
    element.appendChild(title)
  }


  // ---- Search Results ----

  renderNoTitles(div) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, 'NoResultsContainer')
    this.clearPreviousSearch()
    span.innerHTML = "Sorry, there are no matches for that title."
    div.appendChild(span)
  }

  clearPreviousSearch() {
    let sesh = new SessionTools
    sesh.clearMovies()
  }

  render_titles(data, element) {
    let div = this.tool.newElement('div')
    this.tool.elementNames(div, 'ResultsContainer')

    this.clearPreviousSearch()

    let elements = data.map( r =>
      {this.media_card(r, div)}
    )
    // save user in var & clear session, restore user
    element.appendChild(div)
  }

  media_card(data, container) {
    let span = this.tool.newElement('span')
    let id   = data['title'].replace(/ /g,'')
    this.tool.elementNames(span, id, 'mediaCard' )
    let img       = this.addMediaImage(data['picture'], span)
    let title     = this.addMediaTitle(data['title'],   span)
    let titleText = data['title']
    let keyword   = titleText.toUpperCase()

    let str = JSON.stringify(data['streams'])
    sessionStorage[keyword] = str
    span.addEventListener('click', function() {
      let movie = new MovieService
      movie.getMovie(titleText)
    })

    container.appendChild(span)
  }


  // ---- Image ----

  addMediaImage(src, element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, null, 'imgContainer')

    var img = this.tool.newElement('img')
    img.src = src ? src : 'https://i.imgur.com/lLschNS.png'

    img.className = "mediaPoster"
    span.appendChild(img)
    element.appendChild(span)
    return img
  }

  // ---- Title ----

  addMediaTitle(title, element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, null, "mediaTitle" )

    let p       = this.tool.newElement('p')
    p.innerHTML = title
    span.appendChild(p)

    element.appendChild(span)
    return span
  }

}
