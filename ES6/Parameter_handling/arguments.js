// // ECMAScript 5: arguments
// function logAllArguments() {
//   for (var i=0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
//
// // ECMAScript 6: rest parameter
// function logAllArguments(...args) {
//   for (const arg of args) {
//     console.log(arg);
//   }
// }

// function foo(x=0, y=0) {
//   console.log('Arity: '+arguments.length);
// }