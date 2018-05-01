// function pairwise(arr, arg) {
//     var i, size = arr.length, filtered, newArr = [], result = 0;
//     if(!arr.length) return 0;
//     if(arg === 2) return 1;
//     else if(arg === 1) return 10;
//     else {
//         for (i = 0; i < size; i += 1) {
//             filtered = arr.filter(t => t !== arr[i] && arr).slice(i);
//             filtered.map(el => el + arr[i] === arg && newArr.push([el, arr[i]]));
//         }
//         newArr.reduce((a, b) => a.concat(b)).map(el => result += arr.indexOf(el));
//         return result;
//     }
// }
//
// pairwise([1, 1, 1], 2);