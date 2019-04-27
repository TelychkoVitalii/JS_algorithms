/*
Implement a function that takes a string of four digits as its argument, w
ith each digit from 1 ──► 9 (inclusive) with repetitions allowed,
and returns an arithmetic expression that evaluates to the number 24.
If no such solution exists, return "no solution exists."

Rules:

Only the following operators/functions are allowed: multiplication, division, addition, subtraction

Division should use floating point or rational arithmetic, etc, to preserve remainders.

Forming multiple digit numbers from the supplied digits is disallowed. (So an answer of 12+12 when given 1, 2, 2, and 1 is wrong).

The order of the digits when given does not have to be preserved.

Example inputs:

solve24("4878");

solve24("1234");

solve24("6789");

solve24("1127");

Example outputs (strings):

(7-8/8)*4

3*1*4*2

(6*8)/(9-7)

(1+7)*(2+1)

*/


// function solve24(numStr) {
//   var array = numStr.split('').map(Number), tf = 24, i;
//   for(i = 0; i < array.length; i += 1) {
//     if(array[i]) {
//       array.splice(i, 1);
//     }
//   }
//   console.log(array);
// }
//
// solve24('4878');