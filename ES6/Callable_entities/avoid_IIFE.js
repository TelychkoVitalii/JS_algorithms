// 1. Replace an IIFE with a block  if you wanted to keep a variable local

// // ES5
// (function () {
//   var tmp = 'hello';
// }());
//
// console.log(tmp); // Reference Error

// ES6
// {
//   let tmp = 'Hello';
// }
//
// console.log(tmp); //Reference Error

// 2. Replace an IIFE with a module

// ES5 Revealing Module Pattern

// var my_module = (function () {
//   // Module-private variable:
//   var countInvocations = 0;
//
//   function myFunc(x) {
//     countInvocations++;
//
//   }
//
//   // Exported by module:
//   return {
//     myFunc: myFunc
//   };
// }());

// This module pattern produces a global variable and is used as follows:
//
// my_module.myFunc(33);

// ES6
// In ECMAScript 6, modules are built in, which is why the barrier to adopting them is low:
//
// // my_module.js
//
// // Module-private variable:
//   let countInvocations = 0;
//
// export function myFunc(x) {
//   countInvocations++;
//
// }
// This module does not produce a global variable and is used as follows:
//
// import { myFunc } from 'my_module.js';
//
// myFunc(33);

// !!! Method calls: work as with traditional functions, but additionally allow super.