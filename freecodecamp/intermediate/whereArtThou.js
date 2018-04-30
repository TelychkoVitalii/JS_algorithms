// function whatIsInAName(collection, source) {
//     var i, srcKeys = Object.keys(source), sourceLength = srcKeys.length;
//     return collection.filter(function (obj) {
//         for(i = 0; i < sourceLength; i += 1) {
//             if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
//                 return false;
//             }
//         }
//         return true;
//     });
// }
//
// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }],
//     { "a": 1, "b": 2 });