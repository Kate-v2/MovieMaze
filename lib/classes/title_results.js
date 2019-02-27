
import DOMTools  from '../tools/dom_tools.js'
import Movie     from '../classes/movie.js'

export default class TitleResults {

  constructor() {
    this.tool    = new DOMTools
  }

  loadResults(data) {
    let div = this.tool.getElement('content')
    this.tool.clearElement(div)
    this.render_term(   data['term'],    div )
    this.render_titles( data['results'], div )
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

  render_titles(data, element) {
    let div = this.tool.newElement('div')
    this.tool.elementNames(div, 'ResultsContainer')
    let elements = data.map( r => this.media_card(r, div) )
    element.appendChild(div)
  }

  media_card(data, container) {
    let span = this.tool.newElement('span')
    let id   = data['title'].replace(/ /g,'')
    this.tool.elementNames(span, id, 'mediaCard' )
    let img   = this.addMediaImage(data['picture'], span)
    let title = this.addMediaTitle(data['title'],   span)

    // span.onClick = function() { new Movie(data).loadMovie() }
    //
    // This has to be a service callback

    container.appendChild(span)
  }


  // ---- Image ----

  addMediaImage(src, element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, null, 'imgContainer')
    if (src) {
      var img       = this.tool.newElement('img')
      img.src       = src
    } else {
      var img       = this.tool.newElement('span')
      let p         = this.tool.newElement('p')
      p.innerHTML   = "No Image"
      img.appendChild(p)
    }
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
