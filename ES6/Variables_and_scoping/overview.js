// 1. let
// function order(x, y) {
//   if(x > y) {
//     let tmp = x; // blocked
//     x = y;
//     y = tmp;
//   }
//   console.log(tmp === x);
//   return [x, y];
// }
//
// order(4, 7);

// 2. const

// const foo; // error

// Since for-of creates one binding (storage space for a variable) per loop iteration,
// it is OK to const-declare the loop variable:
// for(const x of ['a', 'b']) {
//   console.log(x);
// }