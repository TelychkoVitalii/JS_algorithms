// 1. Dynamic dispatch - arr.slice(1)
// 2. Direct call - Array.prototype.call.slice(1)

// 1. Prototype chain
// var arr = ['a', 'b'];
// var p = Object.getPrototypeOf;
//
// console.log(p(arr) === Array.prototype); // true
// console.log(p(p(arr)) === Object.prototype); // true
// p(p(p(arr))); // null

// Properties in “earlier” objects override properties in “later” objects.
// const obj = {a: 1, b: 2};
// console.log(Object.getPrototypeOf(obj));

// 2. Dispatched method calls
// var func = arr.toString(); // 1. retrieve the value of the first property whose name is toString.
// func.call(arr); // 2. Call the value and set the implicit parameter this to the receiver arr

// 3. Direct method calls
// Function.prototype.call(thisValue, arg0?, arg1?, ···)
// Function.prototype.apply(thisValue, argArray)

// const arr = ['a', 'b', 'c'];
// console.log(Object.prototype.toString.call(arr)); // [object Array]
// console.log(Array.prototype.toString.call(arr)); // a, b, c

// Abbreviations for Object.prototype = {} and Array.prototype = []
