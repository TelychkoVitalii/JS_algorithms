// 1. Mistake: losing the tail of a Promise chain

// // Don’t do this
// function foo() {
//   const promise = asyncFunc();
//   promise.then(result => {
//   // ···
//   });
//
//   return promise;
// }
//
// function foo() {
//   const promise = asyncFunc();
//   return promise.then(result => {
//   // ···
//   });
// }
//
// function foo() {
//   return asyncFunc()
//     .then(result => {
//     // ···
//     });
// }

// 2. Mistake: nesting Promises

// Don’t do this
// asyncFunc1()
//   .then(result1 => {
//     asyncFunc2()
//       .then(result2 => {
//       // ···
//       });
//   });
//
// asyncFunc1()
//   .then(result1 => {
//     return asyncFunc2();
//   })
//   .then(result2 => {
//   // ···
//   });

// 3. Mistake: creating Promises instead of chaining
// 4. Mistake: using then() for error handling

// In principle, catch(cb) is an abbreviation for then(null, cb).
// But using both parameters of then() at the same time can cause problems.