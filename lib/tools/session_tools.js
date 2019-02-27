

export default class SessionTools {

  token() {
    return sessionStorage['token'] || null
  }

  isLoggedIn() {
    return (this.token() != null || this.token() != undefined)
  }


}
