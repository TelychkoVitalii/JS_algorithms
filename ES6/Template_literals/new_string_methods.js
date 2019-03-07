// From indexOf to startsWith:
//
//   if (str.indexOf('x') === 0) {} // ES5
// if (str.startsWith('x')) {} // ES6
// From indexOf to endsWith:
//
//   function endsWith(str, suffix) { // ES5
//     var index = str.indexOf(suffix);
//     return index >= 0
//       && index === str.length-suffix.length;
//   }
// str.endsWith(suffix); // ES6
// From indexOf to includes:
//
//   if (str.indexOf('x') >= 0) {} // ES5
// if (str.includes('x')) {} // ES6
// From join to repeat (the ES5 way of repeating a string is more of a hack):
//
// new Array(3+1).join('#') // ES5
// '#'.repeat(3) // ES6