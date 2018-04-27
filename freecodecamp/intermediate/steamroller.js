// function steamrollArray(arr) {
//     let flattenArr = [].concat(...arr);
//     return flattenArr.some(Array.isArray) ? steamrollArray(flattenArr) : flattenArr;
// }
//
// steamrollArray([1, 2, 3, [4]]);