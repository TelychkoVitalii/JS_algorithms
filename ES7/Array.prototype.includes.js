// console.log(['a', 'b', 'c'].includes('a')); // true
// console.log(['a', 'b', 'c'].includes('d')); // false

// includes is similar to indexOf – the following two expressions are mostly equivalent:

// var arr = ['a', 'b', 'c'];
// arr.includes('c')  - arr.indexOf('c') >= 0 // the same

// The main differences:
// 1. includes() finds NaN, whereas indexOf() doesn’t

// console.log([NaN].includes(NaN)); // true
// console.log([NaN].indexOf(NaN)); // -1


// 2. includes() does not distinguish between +0 and -0
// console.log([-0].includes(+0)); // true
// console.log([-0].indexOf(+0)); // 0