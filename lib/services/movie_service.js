
import Movie     from '../classes/movie.js'


export default class MovieService {


  getMovie(title) {
    let obj  = { "title": title }
    let body = JSON.stringify(obj)
    let blob = new Blob( [ body ], {type : 'application/json'})

    let url  = `https://movie-maze.herokuapp.com/api/v1/movie?title=${title}`

    let movie = new Movie
    var data
    let req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.setRequestHeader("Content-Type", "application/json")
    req.setRequestHeader("Accept",        "application/json")
    req.onload = function() {
      let stat = this.status
      let valid = ( stat >= 200 && stat < 300 )
      if( valid ) {
        data = JSON.parse(this.responseText)['data']['attributes']
        movie.loadMovie(data)

      }
      // else { console.log(this.error) }
    }
    req.send()
  }


}
