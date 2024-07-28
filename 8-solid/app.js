"use strict";
class Billing {
  #amout = 1000;
  сalculateTotal() {
    return this.#amout;
  }
}
class hourBilling extends Billing {
  hour;
  constructor(hour) {
    super();
    this.hour = hour;
  }
  сalculateTotal() {
    return super.сalculateTotal() * this.hour;
  }
}
class itemBilling extends Billing {
  constructor(elements) {
    super();
    this.elements = elements;
  }
  сalculateTotal() {
    return super.сalculateTotal() * this.elements;
  }
}
