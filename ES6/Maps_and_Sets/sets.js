// const set = new Set();
// set.add('red');
// set.has('red');
// set.delete('red');
// set.has('red');
// set.size;
// set.clear();
// console.log(set);

// const set = new Set(['red', 'green', 'blue']);
// const set = new Set().add('red').add('green').add('blue'); // the same

// !!! new Set() has at most one argument
// Array.from(new Set(['foo', 'bar']))
//   [ 'foo', 'bar' ]
// Array.from(new Set('foo', 'bar'))
//   [ 'f', 'o' ]

// const set = new Set([NaN]);
// set.size
// 1
// set.has(NaN)
// true

// const set = new Set();
//
// set.add('foo');
// set.size
// 1
//
// set.add('foo');
// set.size
// 1

// Not with objects
// const set = new Set();
//
// set.add({});
// set.size
// 1
//
// set.add({});
// set.size
// 2

// Iterating - Sets preserve iteration order
// const set = new Set(['red', 'green', 'blue']);
// for (const x of set) {
//   console.log(x);
// }

// const set = new Set(['red', 'green', 'blue']);
// const arr = [...set]; // convert to array

// const arr = [3, 5, 2, 2, 5, 5];
// const unique = [...new Set(arr)];

// Mapping:
//
//   const set = new Set([1, 2, 3]);
// set = new Set([...set].map(x => x * 2));
// // Resulting Set: {2, 4, 6}
// Filtering:
//
//   const set = new Set([1, 2, 3, 4, 5]);
// set = new Set([...set].filter(x => (x % 2) == 0));
// // Resulting Set: {2, 4}

// Union - create a Set that contains the elements of both Set a and Set b
// const a = new Set([1,2,3]);
// const b = new Set([4,3,2]);
// const union = new Set([...a, ...b]);
// console.log(union);

// Intersection - create a Set that contains those elements of Set a that are also in Set b.
// const a = new Set([1,2,3]);
// const b = new Set([4,3,2]);
// const intersection = new Set(
//   [...a].filter(x => b.has(x)));
// console.log(intersection);

// Difference - create a Set that contains those elements of Set a that are not in Set b.
// This operation is also sometimes called minus (-).
// const a = new Set([1,2,3]);
// const b = new Set([4,3,2]);
// const difference = new Set(
//   [...a].filter(x => !b.has(x)));
// console.log(difference);

// WeakSet === WeakMap