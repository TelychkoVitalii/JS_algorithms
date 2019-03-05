// The temporal dead zone (TDZ)

// 1. throw an error
// let tmp = true;
// if(true) {
//   console.log(tmp);
//
//   let tmp;
//
//   console.log(tmp);
//
//   tmp = 123;
//   console.log(tmp);
// }
//
// console.log(tmp);

// 2. dead zone is really temporal (based on time) and not spatial (based on location):
// if(true) { // enter new scope, TDZ starts
//   const func = function () {
//     console.log(myVar);
//   };
//
//   // Here we are within the TDZ and
//   // accessing `myVar` would cause a `ReferenceError`
//
//   let myVar = 3; // TDZ ends
//   func(); // called outside TDZ
// }

// 3. typeof throws a ReferenceError for a variable in the TDZ

// if(true) {
//   // The rationale is as follows: foo is not undeclared, it is uninitialized.
//   // You should be aware of its existence, but aren’t.
//   console.log(typeof foo); // ReferenceError
//   console.log(typeof boo); // undefined
//   let foo;
// }

// 4. Why is there a temporal dead zone?
// - To catch programming errors: Being able to access a variable before its declaration is strange
// - Future-proofing for guards