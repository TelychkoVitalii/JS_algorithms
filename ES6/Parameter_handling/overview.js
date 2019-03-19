// 1. default parameters view

// function func(x, y = 0) {
//   return [x, y];
// }
// func(1, 2); // [1, 2]
// func(1); // [1, 0]
// func(); // [undefined, 0]

// 2. Rest parameters

// function format(pattern, ...params) {
//   return {pattern, params};
// }
// format(1, 2, 3);
// // { pattern: 1, params: [ 2, 3 ] }
// format();
// // { pattern: undefined, params: [] }

// 3. Named parameters via destructuring
// function selectEntries({ start = 0, end = -1, step = 1 } = {}) { // (A)
//   // The object pattern is an abbreviation of:
//   // { start: start=0, end: end=-1, step: step=1 }
// }
//
// selectEntries({ start: 10, end: 30, step: 2 });
// selectEntries({ step: 3 });
// selectEntries({});
// selectEntries();

// 4. Spread operator
// console.log(Math.max(-1, ...[-5, 11, 22], 3));

// 5. Transforming Map
// const map0 = new Map([
//   [1, 'a'],
//   [2, 'b'],
//   [3, 'c'],
// ]);
//
// const map1 = new Map([...map0]); // can use as array
// // console.log(map1.has(1));

// 5. Promise.all
// const urls = [
//   'http://example.com/foo.html',
//   'http://example.com/bar.html',
//   'http://example.com/baz.html',
// ];
//
// Promise.all(urls.map(downloadUrl)).then(([fooStr, barStr, bazStr]) => {});
//
// // This function returns a Promise that is fulfilled
// // with a string (the text)
// function downloadUrl(url) {
//   return fetch(url).then(request => request.text());
// }
