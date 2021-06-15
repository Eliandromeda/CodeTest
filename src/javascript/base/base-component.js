

class BaseComponent {
  constructor(el) {
    this.el = el;
  }


  init() {
    this._elements();
    this._events();
  }

  _elements(){}

  _events() {}
}

export default BaseComponent;
