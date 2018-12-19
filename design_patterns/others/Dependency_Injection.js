// Imperative Way

// class Calculator {
//   sum(a, b) {
//     return a + b;
//   }
// }
//
// class Receipt {
//   constructor(calculator) {
//     this.calc = calculator;
//   }
//   print(itemA, itemB) {
//     const total = this.calc.sum(itemA, itemB);
//     console.log(`total receipt $ ${total}`);
//   }
// }
//
// const pizza = 6.00, beer = 5.00,
//       calc = new Calculator(),
//       receipt = new Receipt(calc);
// receipt.print(pizza, beer);

// Reactive Way

// class Calculator {
//   constructor(itemA, itemB) {
//     const obs = Rx.Observable.of(itemA, itemB);
//     const sum = obs.reduce((acc, item) => acc + item);
//     return {
//       observable: sum
//     }
//   }
// }
//
// class Receipt {
//   constructor(observable$) {
//     observable$.subscribe(value => console.log(`total receipt $ ${value}`));
//   }
// }
//
// const pizza = 6.00, beer = 5.00,
//       calc = new Calculator(pizza, beer),
//       receipt = new Receipt(calc.observable);
// receipt.print(pizza, beer);
