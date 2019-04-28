// function Prefixer(prefix) {
//   this.prefix = prefix;
// }
// Prefixer.prototype.prefixArray = function (arr) { // (A)
//   'use strict';
//   return arr.map(function (x) { // (B)
//     // Doesn’t work:
//     return this.prefix + x; // (C)
//   });
// };


// In line C, we’d like to access this.prefix,
// but can’t, because the this of the function from line B shadows the this of the method from line A.

// SOLUTIONS
// 1. that = this

// function Prefixer(prefix) {
//   this.prefix = prefix;
// }
// Prefixer.prototype.prefixArray = function (arr) {
//   var that = this; // (A)
//   return arr.map(function (x) {
//     return that.prefix + x;
//   });
// };

// 2. specifying a value for this
// function Prefixer(prefix) {
//   this.prefix = prefix;
// }
// Prefixer.prototype.prefixArray = function (arr) {
//   return arr.map(function (x) {
//     return this.prefix + x;
//   }, this); // (A)
// };

// 3. bind(this)

// function Prefixer(prefix) {
//   this.prefix = prefix;
// }
// Prefixer.prototype.prefixArray = function (arr) {
//   return arr.map(function (x) {
//     return this.prefix + x;
//   }.bind(this)); // (A)
// };

// 4. ES6
// function Prefixer(prefix) {
//   this.prefix = prefix;
// }
// Prefixer.prototype.prefixArray = function (arr) {
//   return arr.map((x) => this.prefix + x);
// };

// Immediately Invoked Arrow Function (IIAF)
// (() => {
//   return 123
// })();

// typeof (() => {})
// 'function'
// () => {} instanceof Function
// true
//
// typeof function () {}
// 'function'
// function () {} instanceof Function
// true