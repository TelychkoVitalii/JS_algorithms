/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?

*/

// --- Not very good solution ---

// var largestNumber = 0;
//
// function largestPrimeFactor(number) {
//   var i, result;
//   for(i = number; i >= 1 ; i -= 1) {
//     result = number / i;
//     if(result % 1 === 0) {
//       if(number !== i) {
//         if(i < 0) return;
//         else {
//           if(largestNumber < result)
//             largestNumber = result;
//           return largestPrimeFactor(i);
//         }
//       }
//     }
//   }
//   return largestNumber;
// }
//
// largestPrimeFactor(13195);

// --- Good solution ---

// var largestNumber = 0, i = 2;
//
// function largestPrimeFactor(number) {
//   largestNumber = i;
//   if(number % i === 0) number = number / i;
//
//   if(number <= i) return largestNumber;
//   else {
//     i += 1;
//     return largestPrimeFactor(number);
//   }
//
// }
//
// largestPrimeFactor(13195);

// --- FreeCodeCamp Solution ---
// function largestPrimeFactor(number) {
//   let prime = 2, max = 0;
//   while (prime <= number) {
//     if (number % prime === 0) {
//       max = prime;
//       number = number / prime;
//     }
//     else prime += 1;
//   }
//   return max;
// }
//
// largestPrimeFactor(600851475143);
