// function addTogether() {
//     var check = function (num) {
//         if (typeof num !== 'number') {
//             return undefined;
//         } else {
//             return num;
//         }
//     }, f = arguments[0], c = arguments[1];
//
//     if(arguments.length > 1) {
//         if(check(f) === undefined || check(c) === undefined) {
//             return undefined;
//         } else {
//             return f + c;
//         }
//     } else {
//         if (check(f)) {
//             return function (s) {
//                 if (check(s) === undefined) {
//                     return undefined;
//                 } else {
//                     return f + s;
//                 }
//             }
//         }
//     }
// }

// addTogether(2, 3);