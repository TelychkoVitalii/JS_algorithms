// const sym = Symbol();
// const wrapper = Object(sym);
// console.log(typeof wrapper); // object
// console.log(wrapper instanceof Symbol); // true

// const sym = Symbol('yes');
// const obj = {
//   [sym]: 'a',
//   str: 'b'
// };
// const wrappedSymbol = Object(sym);
// console.log(obj[wrappedSymbol]);