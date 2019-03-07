// 1. local variables

// function func(arg) {
//   let arg; // static error
// }

// function func(arg) {
//   {
//     let arg;
//     console.log(arg);
//   }
// }
//
// func(4);

// function func(arg) {
//   var arg; //  just re-declaring
//   console.log(arg);
// }
//
// func(4);

// 2. Parameter default values and the temporal dead zone

// // OK: `y` accesses `x` after it has been declared
// function foo(x=1, y=x) {
//   return [x, y];
// }
// foo(); // [1,1]
//
// // Exception: `x` tries to access `y` within TDZ
// function bar(x=y, y=2) {
//   return [x, y];
// }
// bar(); // ReferenceError

// 3. Parameter default values don’t see the scope of the body
// const foo = 'outer';
// function bar(func = () => foo) {
//   const foo = 'inner';
//   console.log(func()); // outer
// }
// bar();