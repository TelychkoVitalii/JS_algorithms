// CURRYING !!!

// Is a technique for converting function calls with N arguments
// into chains of N function calls with a single argument for each function call.

// Currying always returns another function with only one argument until all of the arguments have been applied.

// Curry takes a binary function and returns a unary function that returns a unary function.

// Normal function
// function addition(x, y) {
//   return x + y;
// }

// Curried function
// function addition(x) {
//   return function(y) {
//     return x + y;
//   }
// }

// addition(2)(3);
// USAGE: function composition, infrastructure setup, Memoization, Handling error, First class functions


// PARTIAL APPLICATION !!!

// Is a technique of fixing a number of arguments to a function,
// producing another function of smaller arguments i.e binding values to one or more of those arguments
// as the chain of function progressed.

// function addition(x, y, z) {
//   return x + y + z;
// }
//
// const plus5 = addition.bind(null, 5);
// console.log(plus5(10, 6));