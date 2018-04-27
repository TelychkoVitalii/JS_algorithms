// function rot13(str) {
//     var i, arr = str.split(''), size = arr.length;
//     for(i = 0; i < size; i += 1) {
//         var toCode = arr[i].charCodeAt(0);
//         if(toCode < 65 || toCode > 90) {
//             arr[i] = String.fromCharCode(toCode);
//         } else if(toCode < 78) {
//             arr[i] = String.fromCharCode(toCode + 13);
//         } else {
//             arr[i] = String.fromCharCode(toCode - 13);
//         }
//     }
//     return arr.join('');
// }
//
// rot13("SERR PBQR PNZC");