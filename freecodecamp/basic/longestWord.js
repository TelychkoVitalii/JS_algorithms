// function findLongestWord(str) {
//     var arr = str.split(' '),
//         i,
//         size = arr.length,
//         obj = {},
//         wordLength,
//         maxWordLength,
//         newArr = [];
//     for(i = 0; i < size; i += 1) {
//         wordLength = arr[i].length;
//         obj[wordLength] = obj[wordLength] || [];
//         obj[wordLength].push(arr[i]);
//         newArr.push(wordLength);
//     }
//     maxWordLength = Math.max.apply(Math, newArr);
//     return Math.max.apply(Math, newArr);
// }
//
// findLongestWord("The quick brown fox jumped over the lazy dog");