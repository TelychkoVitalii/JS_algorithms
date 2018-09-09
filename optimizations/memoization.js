// easy example
// const memoizeAdd = () => {
//     let cache = {};
//     return n => { //*  ...args
//                   //* let n = args[0];
//         if(n in cache) {
//             console.log('Fetching from cache');
//             return cache[n];
//         } else {
//             console.log('Calculating result');
//             let result = n + 10;
//             cache[n] = result;
//             return result;
//         }
//     }
// };
//
// const newAdd = memoizeAdd();
// console.log(newAdd(9));
// console.log(newAdd(9));

// recursive fn example
// const memoizeFn = (fn) => {
//     let cache = {};
//     return (...args) => {
//         let n = args[0];
//         if(n in cache) {
//             console.log('Fetching from cache', n);
//             return cache[n];
//         } else {
//             console.log('Calculating result', n);
//             let result = fn(n);
//             cache[n] = result;
//             return result;
//         }
//     }
// };
//
// const factorial = memoizeFn(
//     x => {
//         if(x === 0) {
//             return 1;
//         } else {
//             return x * factorial(x - 1);
//         }
//     }
// );
//
// console.log(factorial(5));
// console.log(factorial(6));
