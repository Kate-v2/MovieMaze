
import DOMTools  from '../tools/dom_tools.js'


export default class Movie {

  constructor(data) {
    this.data    = data
    // this.streams = data['streams']
    // this.title   = data['title']
    // this.title   = title
    // this.streams   = streams
    // this.img     = data['picture']

    this.tool    = new DOMTools
  }

  loadMovie(raw) {
    let data = raw['details']

    let div = this.tool.getElement('content')
    this.tool.clearElement(div)


    let container = this.movieContainer(div)

    let details  = this.addDetails(data, container)
    // let img   = this.addPoster(data['Poster'], container)
    // let title = this.addTitle(data['Title'], container)

  }


  movieContainer(element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, 'Movie', null)
    element.appendChild(span)
    return span
  }


  addPoster(src, element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, 'Poster', null)

    var img = this.tool.newElement('img')
    img.src = src ? src : 'https://i.imgur.com/lLschNS.png' 

    span.appendChild(img)
    element.appendChild(span)
    return span
  }

  addDetails(data, element) {
    let div = this.tool.newElement('div')
    this.tool.elementNames(div, 'Details', null)

    this.addPoster(data['Poster'], div)
    this.addContent(data, div)



    element.appendChild(div)
  }

  addContent(data, div) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, 'Text', null)

    let header = this.addHeader(data, span)
    let addSubHeader = this.addSubHeader(data, span)
    this.addGenre(data['Genre'], span)
    this.addActors(data['Actors'], span)
    this.addPlot(data['Plot'], span)
    this.addAwards(data['Awards'], span)
    this.addStreaming(data['Title'], span)

    div.appendChild(span)
  }


  addHeader(data, element) {
    let header = this.tool.newElement('div')
    this.tool.elementNames(header, 'Header', null)

    this.addTitle(data['Title'], header)
    this.addYear(data['Year'],   header)

    element.appendChild(header)
    return header
  }


  addTitle(title, element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, 'Title', null)
    let p    = this.tool.newElement('p')
    p.innerHTML = title
    span.appendChild(p)
    element.appendChild(span)
    return span
  }

  addYear(year, element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, 'Year', null)
    let p    = this.tool.newElement('p')
    p.innerHTML = year
    span.appendChild(p)
    element.appendChild(span)
    return span
  }

  addSubHeader(data, element) {
    let sub = this.tool.newElement('div')
    this.tool.elementNames(sub, 'SubHeader', null)

    this.addRated(data['Rated'],     sub)
    this.addRuntime(data['Runtime'], sub)
    this.addType(data['Type'], sub)

    element.appendChild(sub)
  }

  addRated(rated, element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, 'Rated', null)
    let p    = this.tool.newElement('p')
    p.innerHTML = rated
    span.appendChild(p)
    element.appendChild(span)
    return span
  }

  addRuntime(runtime, element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, 'Runtime', null)
    let p    = this.tool.newElement('p')
    p.innerHTML = runtime
    span.appendChild(p)
    element.appendChild(span)
    return span
  }

  addType(type, element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, 'Type', null)
    let p    = this.tool.newElement('p')
    p.innerHTML = `Type: ${type}`
    span.appendChild(p)
    element.appendChild(span)
    return span
  }

  addGenre(genre, element) {
    let span = this.tool.newElement('div')
    this.tool.elementNames(span, 'Genre', null)
    let p    = this.tool.newElement('p')
    p.innerHTML = `Genre: ${genre}`
    span.appendChild(p)
    element.appendChild(span)
    return span
  }

  addActors(actors, element) {
    let span = this.tool.newElement('div')
    this.tool.elementNames(span, 'Actors', null)
    let p    = this.tool.newElement('p')
    p.innerHTML = `Cast: ${actors}`
    span.appendChild(p)
    element.appendChild(span)
    return span
  }

  addPlot(plot, element) {
    let span = this.tool.newElement('div')
    this.tool.elementNames(span, 'Plot', null)
    let p    = this.tool.newElement('p')
    p.innerHTML = plot
    span.appendChild(p)
    element.appendChild(span)
    return span
  }

  addAwards(awards, element) {
    let span = this.tool.newElement('div')
    this.tool.elementNames(span, 'Awards', null)
    let p    = this.tool.newElement('p')
    p.innerHTML = awards
    span.appendChild(p)
    element.appendChild(span)
    return span
  }

  addStreaming(title, element) {
    title = title.toUpperCase()
    let data = JSON.parse(sessionStorage[title])
    let span = this.tool.newElement('div')
    this.tool.elementNames(span, 'Streams', null)
    data.map( s => this.streamLink(s, span) )

    element.appendChild(span)
    return span
  }

  streamLink(stream, element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, null, 'service')

    let a = this.tool.newElement('a')
    a.href = stream['url']
    a.innerHTML = stream['service']
    span.appendChild(a)

    element.appendChild(span)
    return span
  }



}

// div
  // span poster
  // span details
    // div container
      // span title
      // span year
    // div container
      // span rated
      // span runtime
      // span type
    // div Genre
    // div actors
    // div plot
    // div awards
    // div streaming





// {
//     "data": {
//         "id": "0",
//         "type": "movie",
//         "attributes": {
//             "id": 0,
//             "details": {
//                 "Title": "BoJack Horseman",
//                 "Year": "2014–",
//                 "Rated": "TV-MA",
//                 "Runtime": "25 min",
//                 "Genre": "Animation, Comedy, Drama",
//                 "Director": "N/A",
//                 "Actors": "Will Arnett, Amy Sedaris, Alison Brie, Aaron Paul",
//                 "Plot": "BoJack Horseman was the star of the hit TV show \"Horsin' Around\" in the '90s, now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.",
//                 "Awards": "Nominated for 1 Primetime Emmy. Another 7 wins & 20 nominations.",
//                 "Poster": "https://m.media-amazon.com/images/M/MV5BNzgzNzg3MDkyOF5BMl5BanBnXkFtZTgwOTk5MjAzNjM@._V1_SX300.jpg",
//                 "imdbRating": "8.5/10",
//                 "Type": "series"
//             }
//         }
//     }
// }
