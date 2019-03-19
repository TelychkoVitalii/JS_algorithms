// 1. Prefer arrow functions as callbacks
// 2. Prefer function declarations as stand-alone functions (versus callbacks)
// 3. Prefer method definitions for methods

// ES5
// MyClass.prototype.foo = function (arg1, arg2) {
//
// };

// ES6
// Object.assign(MyClass.prototype, {
//   foo(arg1, arg2) {
//
//   }
// });

// Generator method definitions
// const obj = {
//   *generatorMethod() {
//
//   }
// };
//
// class MyClass {
//   * generatorMethod() {
//
//   }
// }
//
// Calling a generator method returns a generator object.
// You can use this and super as you would in normal method definitions;

// class Hello {
//   constructor() {
//     this.fn = () => {
//
//     }
//   }
//
//   showName = () => {
//
//   }
// }