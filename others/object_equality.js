// objects comparison by value equality
// var jangoFett = {
//     occupation: "Bounty Hunter",
//     genetics: "superb"
// };
//
// var bobaFett = {
//     occupation: "Bounty Hunter",
//     genetics: "superb"
// };
//
// function isEquivalent(a, b) {
//     var aProps = Object.keys(a), bProps = Object.keys(b), i, aSize = aProps.length;
//     if(aProps.length !== bProps.length) {
//         return false;
//     }
//     for(i = 0; i < aSize; i += 1) {
//         var propName = aProps[i];
//         if(a[propName] !== b[propName]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(isEquivalent(jangoFett, bobaFett));