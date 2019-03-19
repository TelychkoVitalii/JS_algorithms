// Number static properties
// 1. Number.isFinite() - determines whether number is an actual number (neither Infinity nor -Infinity nor NaN)
// console.log(Number.isFinite(12.12));

// The advantage of this method is that it does not coerce its parameter to number
// console.log(isFinite('123')); // true
// console.log(Number.isFinite('123')); // false

// 2. Number.isNaN() - checks whether number is the value NaN.
// const x = NaN;
// console.log(isNaN(x)); // true

// ... BUT this function coerces non-numbers to numbers and returns true
//         if the result is NaN (which is usually not what you want):

// console.log(isNaN('???')); // true
// console.log(Number.isNaN('???')); // false

// 3. Number.parseFloat and Number.parseIn - work the same

// 4. Number.EPSILON - specifies a reasonable margin of error when comparing floating point numbers
// function epsEqu(x, y) {
//   return Math.abs(x - y) < Number.EPSILON;
// }
// console.log(epsEqu(0.1+0.2, 0.3)); // true

// 5. Number.isInteger() - returns true if number is a number and does not have a decimal fraction
// Number.isInteger(33.1) // false
// Number.isInteger(-17) // true
// Number.isInteger(Infinity) // false

// 6. JavaScript numbers have only enough storage space to represent 53 bit signed integers.
// That is, integers i in the range −253 < i < 253 are safe. What exactly that means is explained momentarily.
// The following properties help determine whether a JavaScript integer is safe:

// Number.isSafeInteger(number)
// Number.MIN_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER


