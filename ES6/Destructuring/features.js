// rest operator (not as spread operator)
// const [x, ...[y, z]] = ['a', 'b', 'c'];
// console.log(x, y, z);
// // x = 'a'; y = 'b'; z = 'c'

// Examples:

// const obj = {};
// [first, ...obj.prop] = ['a', 'b', 'c'];

// const arr = [];
// ({ bar: arr[0] } = { bar: true });

// DO NOT DO THAT
// { a, b } = someObject; BAD
// ({ a, b } = someObject); OK
// ({ a, b }) = someObject; BAD