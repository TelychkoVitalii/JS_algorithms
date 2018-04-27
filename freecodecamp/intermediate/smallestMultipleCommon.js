// function smallestCommons(arr) {
//     let newArr = [], i, n, j = 0, iterator = 1, min = Math.min(...arr), max = Math.max(...arr);
//     for(i = min; i <= max; i += 1) {
//         newArr.push(i);
//     }
//     while (n !== newArr.length) {
//         j = newArr[0] * iterator * newArr[1];
//         for (n = 2; n < newArr.length; n += 1) {
//             if (j % newArr[n] !== 0) {
//                 break;
//             }
//         }
//         iterator++;
//     }
//     return j;
// }
//
// smallestCommons([1, 5]);
