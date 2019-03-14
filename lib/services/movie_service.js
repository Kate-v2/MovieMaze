
import Movie from '../classes/movie.js'


export default class MovieService {

  getMovie(title, displayMovie=this.displayMovie) {
    let url  = `https://movie-maze.herokuapp.com/api/v1/movie?title=${title}`

    let req  = new XMLHttpRequest()
    req.open('GET', url, true)
    req.setRequestHeader("Content-Type", "application/json")
    req.setRequestHeader("Accept",       "application/json")
    req.onload = function() {
      let stat = this.status
      let valid = ( stat >= 200 && stat < 300 )
      if( valid ) { displayMovie(this.responseText) }
      // else { console.log(this.error) }
    }
    req.send()
  }

  displayMovie(response) {
    let data  = JSON.parse(response)['data']['attributes']
    let movie = new Movie
    movie.loadMovie(data)
  }

}
