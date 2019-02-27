
import TitleResults from '../classes/title_results.js'

export default class SearchTitles {

  constructor() {
    this.url = 'https://movie-maze.herokuapp.com/api/v1/search'
  }

  get_titles() {
    let title = document.getElementById('search-bar').value
    let obj  = { "term": title }
    let body = JSON.stringify(obj)
    let blob = new Blob( [ body ], {type : 'application/json'})
    // let url  = `https://movie-maze.herokuapp.com/api/v1/search`
    let url  = `https://movie-maze.herokuapp.com/api/v1/search?term=${title}`

    let results = new TitleResults

    var data
    let req = new XMLHttpRequest()
    req.open('GET', url, true)
    // req.setRequestHeader("Content-Type", "application/json")
    // req.setRequestHeader("Accept",        "application/json")
    req.setRequestHeader("CONTENT-TYPE", "application/json")
    req.setRequestHeader("ACCEPT",        "application/json")
    req.onload = function() {
      let stat = this.status
      let valid = ( stat >= 200 && stat < 300 )
      if( valid ) {
        data = JSON.parse(this.responseText)['data']['attributes']
        results.loadResults(data)
      }
      // else { badCredentials() }
    }
    // var blob = new Blob([ JSON.stringify(body)], {type : 'application/json'});
    // var blob = new Blob([ JSON.stringify(obj)], {type : 'application/json'});
    // req.send( blob )
    req.send( body )
  }


  // fetch(url, {
  //   method: 'GET',
  //   headers: {
  //               "Content-Type": "application/json",
  //               "Accept":       "application/json",
  //             }
  // })
  // .request( blob )
  // .then( data => JSON.parse(data)['data']['attributes'])
  // .then( parseFunc(data))






}
