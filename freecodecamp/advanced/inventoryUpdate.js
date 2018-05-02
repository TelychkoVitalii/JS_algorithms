// function updateInventory(arr1, arr2) {
//     var i, j;
//     for(i = 0; i < arr2.length; i += 1) {
//         for(j = 0; j < arr1.length; j += 1) {
//             if(arr1[j][1] === arr2[i][1]) {
//                 arr1[j][0] +=  arr2[i][0];
//                 arr2.splice(i, 1);
//             }
//         }
//     }
//     return arr1.concat(arr2).sort(function(a, b) {
//         if (a[1] < b[1]) {
//             return -1;
//         } else if (a[1] > b[1]) {
//             return 1;
//         } else {
//             return 0;
//         }
//     });
// }
//
// var curInv = [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"]
// ];
//
// var newInv = [
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"]
// ];
//
// updateInventory(curInv, newInv);