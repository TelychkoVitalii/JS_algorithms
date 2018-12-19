class Calculator {
  constructor() {
    this.VAT = 22;
  }

  sum(items) {
    const items$ = Rx.Observable.from(items); // inject observable
    return items$.map(value => value + (value * this.VAT / 100)).reduce((acc, value) => acc + value); // calculate
  }
}

class Receipt {
  constructor(calculator) {
    this.calc = calculator;
  }

  print(...items) {
    // Observable as an object that is wrapping the data and exposes some methods for manipulating the values
    const total$ = this.calc.sum(items); // transforming the arguments to observable and return observable object
    total$.subscribe(total => console.log(`total receipt $ ${total.toFixed(2)}`)); // subscribe and show result
  }
}

const JEANS = 80.00,
      SHIRT = 35.00,
      SHOES = 90.00,
      COAT = 140.00,
      HAT = 29.00;
const calc = new Calculator(),
      receipt = new Receipt(calc);
receipt.print(JEANS, SHIRT, SHOES, COAT, HAT);