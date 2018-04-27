// function sumFibs(num) {
//     var fib = [], i;
//     fib[0] = 1;
//     fib[1] = 1;
//     for(i = 2; i < num; i += 1) {
//         fib[i] = fib[i - 2] + fib[i - 1];
//     }
//     return fib.filter(n => (n <= num && n % 2 !== 0) && n).reduce((a, b) => a + b);
// }
//
// sumFibs(4000000);
