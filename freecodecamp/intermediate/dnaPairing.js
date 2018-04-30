// function pairElement(str) {
//     var arr = str.split(''), i, newArr = [], pairs = {
//         'A': 'T',
//         'T': 'A',
//         'G': 'C',
//         'C': 'G'
//     };
//
//         for(i = 0; i < arr.length; i += 1) {
//             if(Object.keys(pairs).indexOf(arr[i]) !== -1) {
//                 newArr.push([arr[i], pairs[arr[i]]]);
//             }
//         }
//
//     return newArr;
// }
//
// pairElement("ATCGA");