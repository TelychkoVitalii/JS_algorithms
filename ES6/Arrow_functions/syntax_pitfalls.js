// console.log(typeof () => {}); // SyntaxError
// console.log(typeof (() => {})); // OK

// const func1 = (x, y) // SyntaxError
//   => {
//   return x + y;
// };
// const func2 = (x, y) => // OK
// {
//   return x + y;
// };

// const f1 = x => ({ bar: 123 });
// f1()
// { bar: 123 }