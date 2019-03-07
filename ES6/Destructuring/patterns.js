// 1. The object pattern coerces destructuring sources to objects before accessing properties.
//    That means that it works with primitive values:
// const { length: len } = 'abc';
// console.log(len);

// 2. Array patterns work with iterables
// const [x,...y] = 'abc';
// const [x,y] = new Set(['a', 'b']); // x='a'; y='b’;
// console.log(x, y);

// 3. Empty objects, null and undefined are not iterable
// [] = {}; // TypeError, empty objects are not iterable
// [] = undefined; // TypeError, not iterable
// [] = null; TypeError, not iterable

// 4. Default values for patterns
// const [{ prop: x } = {}] = [];
// console.log(x); // undefined
// const [{ prop: x } = { prop: 123 }] = [];
// const { prop: x } = { prop: 123 }
// console.log(x); // 123