// 1. const creates immutable variables

// fpe example, variables created by let are mutable
// let foo = 'abc';
// foo = 'def';
// console.log(foo); // def

// Spec detail: changing a const variable always throws a TypeError

// 2. const does not make the value immutable
// const obj = {};
// obj.prop = 123;
// console.log(obj.prop); // it works

// obj = {}; // TypeError

// const obj = Object.freeze({ foo: {} }); // Pitfall: Object.freeze() is shallow
// obj.prop = 123;
// obj.foo.x = 567;
// console.log(obj.prop);

// 3. const in loop bodies
 // But that doesn’t mean that you can’t re-enter its scope and start fresh, with a new value

// function logArgs(...args) {
//   for (const [index, elem] of args.entries()) { // (A)
//     const message = index + '. ' + elem; // (B)
//     console.log(message);
//   }
// }
// logArgs('Hello', 'everyone');