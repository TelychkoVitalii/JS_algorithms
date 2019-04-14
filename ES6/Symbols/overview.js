// // new primitive type Symbols, which created via factory fn
// const mySymbol = Symbol('mySymbol');
// // Every time you call the factory function, a new and unique symbol is created.
// // The optional parameter is a descriptive string that is shown when printing the symbol
// console.log(typeof mySymbol);

// 1. unique property keys - never clashes with other properties

// const iterableObject = {
//   [Symbol.iterator]() {}
// };
//
// for(const x of iterableObject) {
//   console.log(x);
// }

// 2. constants representing concepts

// const COLOR_RED = Symbol('Red');
// const COLOR_ORANGE = Symbol('Orange');
// const COLOR_YELLOW = Symbol('Yellow');
// const COLOR_GREEN = Symbol('Green');
// const COLOR_BLUE = Symbol('Blue');
// const COLOR_VIOLET = Symbol('Violet');
//
// // console.log(Symbol('Red') === Symbol('Red')); // false
// // console.log(COLOR_RED === COLOR_RED); // true
//
// function getComplement(color) {
//   switch (color) {
//     case COLOR_RED:
//       return COLOR_GREEN;
//     case COLOR_ORANGE:
//       return COLOR_BLUE;
//     case COLOR_YELLOW:
//       return COLOR_VIOLET;
//     case COLOR_GREEN:
//       return COLOR_RED;
//     case COLOR_BLUE:
//       return COLOR_ORANGE;
//     case COLOR_VIOLET:
//       return COLOR_YELLOW;
//     default:
//       throw new Exception('Unknown color: '+color);
//   }
// }

// 3. Pitfall: you can’t coerce symbols to strings
// const sym = Symbol('desc');
//
// // const str1 = '' + sym; // TypeError
// // const str2 = `${sym}`; // TypeError
// // console.log(str1, str2);
//
// // Solution
// const str2 = String(sym); // 'Symbol(desc)'
// const str3 = sym.toString(); // 'Symbol(desc)'
// console.log(typeof str2, typeof str3);

// 4. Which operations related to property keys are aware of symbols?
// Reflect.ownKeys()
// Property access via []
// Object.assign()

// --- NOT (IGNORE SYMBOL AS PROPERTY KEYS) ---
// Object.keys()
// Object.getOwnPropertyNames()
// for-in loop
