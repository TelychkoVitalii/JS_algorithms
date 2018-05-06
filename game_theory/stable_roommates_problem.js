// /*
//   Irving`s algorithm of stable roommates problem (SRP)
//   Complexity: O(N^2).
// */
//
// var array = [['a', 'b', 'd', 'f', 'c', 'e'], ['b', 'd', 'e', 'f', 'a', 'c'],
//              ['c', 'd', 'e', 'f', 'a', 'b'], ['d', 'f', 'c', 'a', 'e', 'b'],
//              ['e', 'f', 'c', 'd', 'b', 'a'], ['f', 'a', 'b', 'd', 'c', 'e']],
//     size1 = array.length, size2, size3, pieces = [], results = [], pies, effect, temp, i, j;
//
// for (i = 0; i < size1; i += 1) {
//     for (j = 1; j < size1; j += 1) {
//         pies = array[i][0] + array[i][j];
//         effect = size1 - j;
//         pieces[pieces.length] = [pies, effect];
//     }
// }
//
// for (i = 0, size2 = pieces.length; i < size2; i += 1) {
//     for (j = 0; j < size2; j += 1) {
//         if (pieces[i][0][0] === pieces[j][0][1] && pieces[i][0][1] === pieces[j][0][0]) {
//             effect = pieces[i][1] + pieces[j][1];
//             results.push([pieces[i][0], effect]);
//             pieces.splice(j, 1);
//             size2 = pieces.length;
//         }
//     }
// }
//
// for (i = 0, size3 = results.length; i < size3; i += 1) {
//     for (j = 1; j < size3; j += 1) {
//         if(results[j - 1][1] < results[j][1]) {
//             temp = results[j - 1];
//             results[j - 1] = results[j];
//             results[j] = temp;
//         }
//     }
// }
//
// for (i = 0; i < size3; i += 1) {
//     for (j = i + 1; j < size3; j += 1) {
//         if (results[i][0][0] === results[j][0][0] ||
//             results[i][0][0] === results[j][0][1] ||
//             results[i][0][1] === results[j][0][0] ||
//             results[i][0][1] === results[j][0][1]) {
//
//             results.splice(j, 1);
//             size3 = results.length;
//             j = j - 1;
//         }
//     }
// }