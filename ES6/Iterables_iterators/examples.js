// function objectEntries(obj) {
//   let it = Reflect.ownKeys(obj)[Symbol.iterator]();
//   return {
//     [Symbol.iterator]() {
//       return this;
//     },
//     next() {
//       let { done, value: key } = it.next();
//       if(done) {
//         return { done: true };
//       }
//       return { value: obj[key] };
//     }
//   }
// }
//
// // objectEntries({ a: 1, b: 2 });
//
// for(const x of objectEntries({ a: 1, b: 2 })) {
//   console.log(x);
// }


// Combinators are functions that combine existing iterables to create new ones.

// function take(n, iterable) {
//   const it = iterable[Symbol.iterator]();
//   return {
//     [Symbol.iterator]() {
//       return this;
//     },
//     next() {
//       if(n > 0) {
//         n--;
//         return it.next();
//       } else {
//         return { done: true }
//       }
//     }
//   }
// }
//
// const arr = ['a', 'b', 'c', 'd'];
// for (const x of take(2, arr)) {
//   console.log(x);
// }


// function zip(...iterables) {
//   const iterators = iterables.map(i => i[Symbol.iterator]());
//   let done = true;
//   return {
//     [Symbol.iterator]() {
//       return this;
//     },
//     next() {
//       if(!done) {
//         const items = iterators.map(i => i.next());
//         done = items.some(item => item.done);
//         if (!done) {
//           return { value: items.map(i => i.value) };
//         }
//         for (const iterator of iterators) {
//           if (typeof iterator.return === 'function') {
//             iterator.return();
//           }
//         }
//       }
//       return { done: true };
//     }
//   }
// }
//
// const zipped = zip(['a', 'b', 'c'], ['d', 'e', 'f']);
//
// for(const x of zipped) {
//   console.log(x);
// }