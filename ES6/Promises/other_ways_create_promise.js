// 1. Promise.resolve()

// Promise.resolve('abc')
//   .then(x => console.log(x)); // 'abc'

// const fulfilledThenable = {
//   then(reaction) {
//     reaction('hello');
//   }
// };
// const promise = Promise.resolve(fulfilledThenable);
// console.log(promise instanceof Promise); // true
// promise.then(x => console.log(x)); // hello

// That means that you can use Promise.resolve() to convert any value (Promise, thenable or other) to a Promise.
// In fact, it is used by Promise.all() and Promise.race() to convert Arrays of arbitrary values to Arrays of Promises.


// 2. Promise.reject()

// const myError = new Error('Problem!');
// Promise.reject(myError)
//   .catch(err => console.log(err === myError)); // true