// 1. for loop

// var-declaring a variable in the head of a for loop creates a single binding (storage space) for that variable
// Every i in the bodies of the three arrow functions refers to the same binding,
// which is why they all return the same value.

// const arr = [];
// for(var i = 0; i < 3; i += 1) {
//   arr.push(() => i);
// }
//
// console.log(arr.map(x => x())); // [3, 3, 3]


// This time, each i refers to the binding of one specific iteration and
// preserves the value that was current at that time.

// const works like var, but you can’t change the initial value of a const-declared variable

// const arr = [];
// for(let i = 0; i < 3; i += 1) {
//   arr.push(() => i);
// }
//
// console.log(arr.map(x => x())); // [0, 1, 2]


// 2. for-of loop and for-in loop

// In a for-of loop, var creates a single binding:
//
//   const arr = [];
// for (var i of [0, 1, 2]) {
//   arr.push(() => i);
// }
// arr.map(x => x()); // [2,2,2]
// const creates one immutable binding per iteration:
//
//   const arr = [];
// for (const i of [0, 1, 2]) {
//   arr.push(() => i);
// }
// arr.map(x => x()); // [0,1,2]
// let also creates one binding per iteration, but the bindings it creates are mutable.
//
//   The for-in loop works similarly to the for-of loop.