// 1. Custom iterator

// const iterables = {
//   [Symbol.iterator]() {
//     let step = 0;
//     return {
//       next() {
//         if(step <= 2) {
//           step++;
//         }
//         switch (step) {
//           case 1:
//             return { value: 'hello', done: false };
//           case 2:
//             return { value: 'world', done: false };
//           default:
//             return { value: undefined, done: true };
//         }
//       }
//     };
//   }
// };
//
// for(const x of iterables) {
//   console.log(x);
// }

// 2. Iterate Object with properties
// function objectEntries(obj) {
//   let index = 0;
//
//   // In ES6, you can use strings or symbols as property keys,
//   // Reflect.ownKeys() retrieves both
//   const propKeys = Reflect.ownKeys(obj);
//
//   return {
//     [Symbol.iterator]() {
//       return this;
//     },
//     next() {
//       if (index < propKeys.length) {
//         const key = propKeys[index];
//         index++;
//         return { value: [key, obj[key]] };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// }
//
// const obj = { first: 'Jane', last: 'Doe' };
// for (const [key,value] of objectEntries(obj)) {
//   console.log(`${key}: ${value}`);
// }