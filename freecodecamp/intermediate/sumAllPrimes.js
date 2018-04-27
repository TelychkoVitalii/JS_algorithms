// function sumPrimes(num) {
//     var i, divider = 2, arr = [];
//     for(i = divider; i <= num; i += 1) {
//             isPrime(i, divider) && arr.push(i);
//         }
//     return arr.reduce((a, b) => a + b);
// }
//
// function isPrime(n, div) {
//     while(n > div) {
//         if(n % div === 0) {
//             return false;
//         } else {
//             div++;
//         }
//     }
//     return true;
// }
//
// sumPrimes(977);