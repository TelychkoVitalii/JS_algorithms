// const map = new Map([
//   [false, 'no'],
//   [true,  'yes'],
// ]);

// for (const key of map.keys()) {
//   console.log(key);
// }
//
// for (const key of map.values()) {
//   console.log(key);
// }

// for (const entry of map.entries()) {
//   console.log(entry[0], entry[1]);
// }

// for (const [key, value] of map.entries()) {
//   console.log(key, value);
// }

// for (const [key, value] of map) {
//   console.log(key, value);
// }

// 1. Converting iterables (incl. Maps) to Arrays
// const map = new Map().set(false, 'no').set(true, 'yes');
// console.log([...map.keys()]);
// console.log([...map.values()]);
// console.log([...map]);

// 2. Looping over Map entries
// const map = new Map([
//   [false, 'no'],
//   [true,  'yes'],
// ]);
//
// map.forEach((value, key, array) => {
//   console.log(key, value, array);
// });

// 3. Filtering (or map) Maps
// const originalMap = new Map()
//   .set(1, 'a')
//   .set(2, 'b')
//   .set(3, 'c');
//
// const filteredMap = new Map( // Convert the result back to a Map.
//   [...originalMap] // Convert the Map into an Array of [key,value] pairs
//     .filter(([k, v]) => k < 3) // Map or filter the Array.
// );
//
// console.log(filteredMap);

// 4. Combining Maps
// const map1 = new Map()
//   .set(1, 'a1')
//   .set(2, 'b1')
//   .set(3, 'c1');
//
// const map2 = new Map()
//   .set(2, 'b2')
//   .set(3, 'c2')
//   .set(4, 'd2');
//
// const combineMaps = new Map([...map1, ...map2]);
// console.log(combineMaps); // or [...combineMaps] or JSON.stringify([...combineMaps] or new Map(JSON.parse(jsonStr));