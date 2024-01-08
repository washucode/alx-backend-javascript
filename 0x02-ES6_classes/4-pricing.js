import Currency from './3-currency';

class Pricing {
  constructor(price, currency) {
    this.price = price;
    this.currency = currency;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Price must be a number');
    }
    this._price = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.price} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('ConversionRate must be a number');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
