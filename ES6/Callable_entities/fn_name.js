// let func1 = function () {};
// // console.log(func1.name); // func1

// const func = () => {};
// console.log(func.name); // func

// 1. the name of a function is always assigned at creation
// 2. Function names are subject to minification, which means that they will usually change in minified code.
// Depending on what you want to do, you may have to manage function names via strings (which are not minified) or
// you may have to tell your minifier what names not to minify.