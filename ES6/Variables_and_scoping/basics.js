// The behavior of var is occasionally confusing. Example:
// var x = 3;
//
// function func(randomize) {
//   if(randomize) {
//     var x = Math.random();
//     return x;
//   }
//   // First phase (initialization see var x = undefined)
//   return x;
// }
//
// console.log(func(false));

// Rewrite with block scoped let/const

// let x = 3;
// function func(randomize) {
//   if(randomize) {
//     let x = Math.random();
//     return x;
//   }
//   return x;
// }
//
// console.log(func(false));