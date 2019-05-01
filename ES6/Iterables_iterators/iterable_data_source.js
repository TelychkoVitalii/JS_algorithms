// Arrays
// for (const x of ['a', 'b']) {
//   console.log(x);
// }

// Strings
// for (const x of 'a\uD83D\uDC0A') {
//   console.log(x);
// }

/*
You have just seen that primitive values can be iterable. A value doesn’t have to be an object in order to be iterable.
That’s because all values are coerced to objects before the iterator method (property key Symbol.iterator) is accessed.
*/

// Maps
// const map = new Map().set('a', 1).set('b', 2);
// for (const pair of map) {
//   console.log(pair);
// }

// Sets
// const set = new Set().add('a').add('b');
// for (const x of set) {
//   console.log(x);
// }

// Note that WeakMaps and WeakSets are not iterable.

// arguments
// function printArgs() {
//   for (const x of arguments) {
//     console.log(x);
//   }
// }

// DOM data structures
// for (const node of document.querySelectorAll('div')) {
// ···
// }

// Plain objects are not iterable
// for (const x of {}) { // TypeError
//   console.log(x);
// }

// just ...
// const obj = { first: 'Jane', last: 'Doe' };
//
// for (const [key,value] of objectEntries(obj)) {
//   console.log(`${key}: ${value}`);
// }