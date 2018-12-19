// function findMissingLetter(array) {
//   let i, string = array.join(''), size = string.length;
//   for (i = 0; i < size; i += 1) {
//     if(string.charCodeAt(i) !== string.charCodeAt(0) + i) return String.fromCharCode(string.charCodeAt(i) - 1);
//   }
//   return '';
// }