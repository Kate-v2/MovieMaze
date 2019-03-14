
import TitleResults from '../classes/title_results.js'

export default class SearchTitles {

  get_titles() {
    let title = document.getElementById('search-bar').value
    let url  = `https://movie-maze.herokuapp.com/api/v1/search?term=${title}`
    let displayResults = this.displayResults
    let req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.setRequestHeader("Content-Type", "application/json")
    req.setRequestHeader("Accept",       "application/json")
    req.onload = function() {
      let stat = this.status
      let valid = ( stat >= 200 && stat < 300 )
      if( valid ) { displayResults(this.responseText) }
      // else { console.log(this.error) }
    }

    req.send()
  }

  displayResults(response) {
    let data    = JSON.parse(response)['data']['attributes']
    let results = new TitleResults
    results.loadResults(data)
  }


}
