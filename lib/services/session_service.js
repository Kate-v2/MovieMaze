

import SessionTools from '../tools/session_tools.js'


export default class SessionService {




  register(data) {
    let body= `username=${data['username']}&password=${data['password']}&password_confirmation=${data['password_confirmation']}&email=${data['email']}`
    let url  = `https://movie-maze.herokuapp.com/users?${body}`

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
    req.send()
  }


  login(data) {
    let body= `username=${data['username']}&password=${data['password']}`
    let url  = `https://movie-maze.herokuapp.com/sessions?${body}`

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
    req.send()

  }


}
