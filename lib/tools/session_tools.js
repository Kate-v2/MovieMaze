

export default class SessionTools {

  token() {
    return sessionStorage['token'] || null
  }

  isLoggedIn() {
    return (this.token() != null || this.token() != undefined)
  }

  setToken(token) {
    sessionStorage['token'] = token
  }

  clearMovies() {
    let token = this.token()
    sessionStorage.clear()
    if (token) {this.setToken(token)}
  }


}
