// Map is a data collection type (in a more fancy way — abstract data structure type), i
// n which, data is stored in a form of pairs, which contains a unique key and value mapped to that key.
// And because of the uniqueness of each stored key, there is no duplicate pair stored.
// - key and value in Map can be in any data type, not limited to only string or integer.
// - Map is mainly used for fast searching and looking up data.

// const map = new Map();
// map.set('foo', 123);
// map.get('foo'); // 123
// map.has('foo'); // true
// map.delete('foo'); // true
// map.has('foo'); // false
// map.size; // 1
// map.clear(); // 0
// map.size; // 0

// const map = new Map([
//   [ 1, 'one' ],
//   [ 2, 'two' ],
//   [ 3, 'three' ], // trailing comma is ignored
// ]);
//
// console.log(map);

// Alternatively, the set() method is chainable:

// const map = new Map()
//   .set(1, 'one')
//   .set(4, 'one')
//   .set(2, 'two')
//   .set(3, 'three');
//
// console.log(map);

// 1. Any value can be a key, even an object
// const map = new Map();
//
// const KEY1 = {};
// map.set(KEY1, 'hello');
// console.log(map.get(KEY1)); // hello

// const map = new Map();
//
// map.set(NaN, 123);
// map.get(NaN);

// new Map().get('asfddfsasadf') // undefined