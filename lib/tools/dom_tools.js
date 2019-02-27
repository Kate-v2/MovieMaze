
export default class DOMTools {

  getElement(id) {
    return document.getElementById(id)
  }

  newElement(type) {
    return document.createElement(type)
  }

  elementNames(element, id=null, className=null) {
    if (id)        { element.id = id               }
    if (className) { element.className = className }
  }

  clearElement(element) {
    element.innerHTML = ''
  }

}
