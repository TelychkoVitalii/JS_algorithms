// function lcs(word1, word2) {
//   // 1. Need to create two-dimensional array with zero values
//   var max = 0, index = 0, i, j, k, l, z, str = '',
//       word1Length = word1.length,
//       word2Length = word2.length,
//       lcsArr = new Array(word1Length);
//   for(i = 0; i < word1Length; i += 1) {
//     lcsArr[i] = new Array(word2Length);
//     for(j = 0; j < word2Length; j += 1) {
//       lcsArr[i][j] = 0;
//     }
//   }
//
//   // 2. Keep tracks of each character
//   for(k = 0; k < word1Length; k += 1) {
//     for(l = 0; l < word2Length; l += 1) {
//       if(k === 0 || l === 0) {
//         lcsArr[k][l] = 0;
//       } else {
//         if(word1[k - 1] === word2[l - 1]) {
//           lcsArr[k][l] = lcsArr[k - 1][l - 1] + 1;
//         } else {
//           lcsArr[k][l] = 0;
//         }
//       }
//       if(max < lcsArr[k][l]) {
//         max = lcsArr[k][l];
//         index = k;
//       }
//     }
//   }
//
//   // 3. Builds a string
//   if(max === 0) {
//     return '';
//   } else {
//     for(z = index - max; z <= max; z += 1) {
//       str += word2[z]
//     }
//     return str;
//   }
// }
//
// lcs('raven', 'havoc');