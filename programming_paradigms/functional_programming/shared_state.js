// const x = {
//   val: 2
// };
//
// // Mutates shared state
// const x1 = () => x.val += 1;
// // Mutates shared state
// const x2 = () => x.val *= 2;
//
// // if reverse invocations => result changed
// x2();
// x1();
//
// console.log(x.val);

// Immutable state
// const x = {
//   val: 2
// };
//
// const inc = x => ({ ...x, val: x.val + 1 });
// const double = x => ({ ...x, val: x.val * 2 });
//
// console.log(double(inc(x)).val);