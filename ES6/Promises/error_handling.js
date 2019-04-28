// Operational errors happen when a correct program encounters an exceptional situation that requires deviating
// from the “normal” algorithm. For example, a storage device may run out of memory while the program is writing data to it.
// This kind of error is expected.
// Programmer errors happen when code does something wrong.
// For example, a function may require a parameter to be a string, but receives a number.
// This kind of error is unexpected.

// Promise.race()

// var p1 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 1500, 'one');
// });
//
// var p2 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 1100, 'two');
// });
//
// Promise.race([p1, p2]).then(function(value) {
//   console.log(value); // "two"
//   // Both resolve, but p2 is faster
// });