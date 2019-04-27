// function h(z) {
//   // Print stack trace
//   console.log(new Error().stack); // (A)
// }
// function g(y) {
//   h(y + 1); // (B)
// }
// function f(x) {
//   g(x + 1); // (C)
// }
// f(3); // (D)


// Run-to-completion semantics

// setTimeout(function () { // (A)
//   console.log('Second');
// }, 0);
// console.log('First'); // (B)

// 1. Asynchronous results via events

// However, you don’t need to explicitly queue the request, that is done by open().
// It is executed after the current task is finished.
// That is why you can (and in fact must) register event handlers after calling open().

// var openRequest = indexedDB.open('test', 1);
//
// openRequest.onsuccess = function (event) {
//   console.log('Success!');
//   var db = event.target.result;
// };
//
// openRequest.onerror = function (error) {
//   console.log(error);
// };

// 2. Asynchronous results via callbacks

// console.log('A');
// identity('B', step2);
// function step2(result2) {
//   // The program continues here
//   console.log(result2);
//   identity('C', step3);
//   console.log('D');
// }
// function step3(result3) {
//   console.log(result3);
// }
// function identity(a, step) {
//   return step;
// }
// console.log('E');