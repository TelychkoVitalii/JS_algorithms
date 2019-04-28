// ES6

// function asyncFunc() {
//   return new Promise((resolve, reject) => { // (A)
//     setTimeout(() => resolve('DONE'), 100); // (B)
//   });
// }
//
//
// asyncFunc()
//   .then(x => console.log('Result: ' + x));

// ES8

// async function main() {
//   const x = await asyncFunc();
//   console.log('Result: ' + x);
// }
//
// main();

// SO
// Conceptually, invoking asyncFunc() is a blocking function call.
// A Promise is both a container for a value and an event emitter.

// 1. Calling a Promise-based function is blocking
// 2. A Promise is a container for an asynchronously delivered value
// 3. A Promise is an event emitter

// The same
// promise.then(
//   null,
//   error => { /* rejection */ });
//
// promise.catch(
//   error => { /* rejection */ });
