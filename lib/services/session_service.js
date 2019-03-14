
import SessionTools from '../tools/session_tools.js'


export default class SessionService {

  register(data) {
    let url  = `https://movie-maze.herokuapp.com/users`
    this.setup(data, url)
  }

  login(data) {
    let url  = `https://movie-maze.herokuapp.com/sessions`
    this.setup(data, url)
  }

  setup(data, url) {
    let body = new Blob( [JSON.stringify(data)], {type : 'application/json'})
    this.sessionConnection(body, url)
  }

  sessionConnection(body, url, setToken=this.setToken) {
    let req = new XMLHttpRequest()
    req.open('POST', url, true)
    req.setRequestHeader("Content-Type", "application/json")
    req.setRequestHeader("Accept",       "application/json")
    req.onload = function() {
      let stat = this.status
      let valid = ( stat >= 200 && stat < 300 )
      if( valid ) { setToken(this.responseText) }
      // else { console.log(this.error) }
    }
    req.send(body)
  }

  setToken(data) {
    let sesh  = new SessionTools
    let token = JSON.parse(data)['data']['attributes']['token']
    sesh.setToken(token)
  }


}
