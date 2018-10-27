// Recursive Approach

// function recurFib(n) {
//   if(n < 2) {
//     return n;
//   } else {
//     return recurFib(n - 1) + recurFib(n - 2);
//   }
// }
//
// console.log(recurFib(10));

// Dynamic Programming Approach

// function dynFib(n) {
//   var val = [], j;
//   val[1] = 1;
//   val[2] = 2;
//   for (j = 3; j <= n; j += 1) {
//     val[j] = val[j - 1] + val[j - 2];
//   }
//   return val[n - 1];
// }
//
// console.log(dynFib(10));

// The dynamic programming solution is much more efficient than the recursive solution when we compute anything over fib(20).