// function findMissingLetter(array) {
//     for (var i = 0, string = array.join(''); i < string.length; i += 1) {
//         var code = string.charCodeAt(i);
//         if(code !== string.charCodeAt(0) + i) {
//             return String.fromCharCode(code - 1);
//         }
//     }
//     return '';
// }
//
// findMissingLetter(['a','c','d','e','f']);