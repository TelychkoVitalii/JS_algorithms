// const _counter = Symbol('counter'), _action = Symbol('action');
//
// class Countdown {
//   constructor(counter, action) {
//     this[_counter] = counter;
//     this[_action] = action;
//   }
//   dec() {
//     let counter = this[_counter];
//     if (counter < 1) return;
//     counter--;
//     this[_counter] = counter;
//     if (counter === 0) {
//       this[_action]();
//     }
//   }
// }

// Note that symbols only protect you from name clashes, not from unauthorized access

// Symbols as keys of meta-level properties
/*

Symbols having unique identities makes them ideal as keys of public properties that exist on a different level than
“normal” property keys, because meta-level keys and normal keys must not clash.
One example of meta-level properties are methods that objects can implement to customize
how they are treated by a library.
Using symbol keys protects the library from mistaking normal methods as customization methods.

ES6 Iterability is one such customization.
An object is iterable if it has a method whose key is the symbol (stored in) Symbol.iterator.

*/

// converting to boolean/string via Boolean/String
  // const num = Symbol('123');
// console.log(+num); // no numbers