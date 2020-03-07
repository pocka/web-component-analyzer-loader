export class MyElement extends HTMLElement {
  myProp = 'foo'

  static get observedAttributes() {
    return ['attr1', 'attr2']
  }

  set value(val) {}
}

customElements.define('my-element', MyElement)
