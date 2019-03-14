

import SessionTools from '../tools/session_tools.js'


export default class SessionService {


  register(data) {
    let body = new Blob([JSON.stringify(data)], {type : 'application/json'})
    let url  = `https://movie-maze.herokuapp.com/users`

    let sesh = new SessionTools

    var data
    let req = new XMLHttpRequest()
    req.open('POST', url, true)
    req.setRequestHeader("Content-Type", "application/json")
    req.setRequestHeader("Accept",       "application/json")
    req.onload = function() {
      let stat = this.status
      let valid = ( stat >= 200 && stat < 300 )
      if( valid ) {
        data = JSON.parse(this.responseText)['data']['attributes']['token']
        sesh.setToken(data)
      }
      // else { console.log(this.error) }
    }
    req.send(body)
  }


  login(data) {
    let body = new Blob( [JSON.stringify(data)], {type : 'application/json'})
    let url  = `https://movie-maze.herokuapp.com/sessions`

    let sesh = new SessionTools

    var data
    let req = new XMLHttpRequest()
    req.open('POST', url, true)
    req.setRequestHeader("Content-Type", "application/json")
    req.setRequestHeader("Accept",        "application/json")
    req.onload = function() {
      let stat = this.status
      let valid = ( stat >= 200 && stat < 300 )
      if( valid ) {
        data = JSON.parse(this.responseText)['data']['attributes']['token']
        sesh.setToken(data)
      }
      // else { console.log(this.error) }
    }
    req.send(body)

  }


}
