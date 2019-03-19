// can be used as property keys
// const MY_KEY = Symbol();
// const obj = {};
//
// obj[MY_KEY] = 123;
// console.log(obj[MY_KEY]);

// const FOO = Symbol();
// const obj = {
//   [FOO]() {
//     return 'bar';
//   }
// };
// console.log(obj[FOO]());

// ENUMERATING
// const obj = {
//   [Symbol('my_key')]: 1,
//   enum: 2,
//   'non_enum': 3
// };

// console.log(Object.getOwnPropertyNames(obj)); // ignores symbol-value property
// console.log(Object.getOwnPropertySymbols(obj)); // ignores string-value property
// console.log(Object.keys(obj)); // ignores symbol-value property
// for(var prop in obj) { // ignores symbol-value property
//   console.log(prop);
// }

// console.log(Reflect.ownKeys(obj)); // get all keys