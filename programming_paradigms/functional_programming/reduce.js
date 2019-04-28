// // Reduce
// const summingReducer = (acc, n) => acc + n;
// [2, 4, 6].reduce(summingReducer, 0);
//
// // Map via reduce
// const map = (fn, arr) => arr.reduce((acc, item, index, arr) => acc.concat(fn(item, index, arr)), []);
// const plusOneToNumber = n => n + 1;
//
// map(plusOneToNumber, [1, 2, 3]);
//
// // Filter via reduce
// const filter = (fn, arr) => arr.reduce((acc, item) => fn(item) ? acc.concat([item]) : acc, []);
// const showOddNumbers = number => number % 2 === 0;
//
// filter(showOddNumbers, [1, 2, 3, 4, 5, 6]);