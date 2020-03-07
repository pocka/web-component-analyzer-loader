@customElement('my-element')
export class MyElement extends LitElement {
  myProp = 'myProp'

  @property({ type: String }) prop4 = 'hello'

  @property({ type: Boolean, attribute: 'prop-5' }) prop5

  static get properties() {
    return {
      prop1: { type: String },
      prop2: { type: Number, attribute: 'prop-two' },
      prop3: { type: Boolean, attribute: false }
    }
  }
}
