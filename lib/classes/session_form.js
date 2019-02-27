
import DOMTools     from '../tools/dom_tools.js'
import SessionTools from '../tools/session_tools.js'


export default class SessionForm {

  constructor() {
    this.tool    = new DOMTools
    this.session = new SessionTools
  }

  loadRegister() {
    let content = this.tool.getElement('content')
    this.tool.clearElement(content)

    let element = this.tool.newElement('span')
    this.tool.elementNames(element, 'RegisterForm')

    let email = this.makeEmail(element)
    let user =  this.makeUsername(element)
    let pw = this.makePassword(element)
    let pwConf = this.makeConfPassword(element)
    let submit = this.makeSubmit(element)


    content.appendChild(element)

    let go = this.tool.getElement('submit')
    go.addEventListener('click', function() {
      let sesh = new SessionTools
      sesh.signup()
    })


  }


  loadLogin() {
    let content = this.tool.getElement('content')
    this.tool.clearElement(content)

    let element = this.tool.newElement('span')
    this.tool.elementNames(element, 'LoginForm')

    let user = this.makeUsername(element)
    let pw = this.makePassword(element)
    let submit = this.makeSubmit(element)

    content.appendChild(element)

    let go = this.tool.getElement('submit')
    go.addEventListener('click', function() {
      let sesh = new SessionTools
      sesh.login()
    })

  }





  // ------ fields -------


  makeEmail(element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, null, 'formFieldContainer' )

    this.makeTitle("Email:", span)
    this.makeField("Email", "Email", span)

    element.appendChild(span)
    return span
  }

  makeUsername(element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, null, 'formFieldContainer' )

    this.makeTitle("Username:", span)
    this.makeField("Username", "Username", span)

    element.appendChild(span)
    return span
  }

  makePassword(element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, null, 'formFieldContainer' )

    this.makeTitle("Password:", span)
    this.makePasswordField("Password", "Password", span)

    element.appendChild(span)
    return span
  }

  makeConfPassword(element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, null, 'formFieldContainer' )

    this.makeTitle("Password Confirmation:", span)
    this.makePasswordField("Password", "PasswordConf", span)

    element.appendChild(span)
    return span
  }


//  --- Builder ---

  makeTitle(text, element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, null, 'formTitle' )

    let p = this.tool.newElement('p')
    p.innerHTML = text
    span.appendChild(p)

    element.appendChild(span)
    return span
  }

  makeField(placeholder, id, element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, null, 'formField' )

    let input = this.tool.newElement('input')
    input.type = 'text'
    input.placeholder = placeholder
    input.id = id

    span.appendChild(input)
    element.appendChild(span)
    return span
  }

  makePasswordField(placeholder, id, element) {
    let span = this.tool.newElement('span')
    this.tool.elementNames(span, null, 'formField' )

    let input = this.tool.newElement('input')
    input.type = 'password'
    input.placeholder = placeholder
    input.id = id

    span.appendChild(input)
    element.appendChild(span)
    return span
  }

  makeSubmit(element) {
    let span = this.tool.newElement('div')
    this.tool.elementNames(span, 'FormSubmit' )

    let input = this.tool.newElement('input')
    input.type = 'submit'
    input.id   = 'submit'

    span.appendChild(input)
    element.appendChild(span)
    return span
  }



}
