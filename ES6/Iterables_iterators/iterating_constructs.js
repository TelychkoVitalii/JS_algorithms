/*
The following ES6 language constructs make use of the iteration protocol:

Destructuring via an Array pattern
for-of loop
Array.from()
Spread operator (...)
Constructors of Maps and Sets
Promise.all(), Promise.race()
yield*

*/

// 1. Via Array patterns
// const set = new Set().add('a').add('b').add('c');
//
// const [x,y] = set;
// // x='a'; y='b'
//
// const [first, ...rest] = set;
// // first='a'; rest=['b','c'];

// 2. The for-of loop
// for (const x of iterable) {
// ···
// }

// 3. Array.from()
// > Array.from(new Map().set(false, 'no').set(true, 'yes'))
//   [[false,'no'], [true,'yes']]
// > Array.from({ length: 2, 0: 'hello', 1: 'world' })
//   ['hello', 'world']

// 4. Spread operator
// > const arr = ['b', 'c'];
// > ['a', ...arr, 'd']
//   ['a', 'b', 'c', 'd']

// 5. Maps and Sets
// 6. Promises - all | race
// 7. yield*
// function* yieldAllValuesOf(iterable) {
//   yield* iterable;
// }