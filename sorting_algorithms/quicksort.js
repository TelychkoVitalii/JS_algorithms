// function quickSort(list) {
//   var lesser = [], greater = [], pivot = list[0], i, size = list.length, item;
//   if(size === 0) return [];
//   for(i = 1; i < size; i += 1) {
//     item = list[i];
//     item < pivot ? lesser.push(item) : greater.push(item);
//   }
//   return quickSort(lesser).concat(pivot, quickSort(greater));
// }
//
// const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
// quickSort(list);
//
// function swap(items, firstIndex, secondIndex){
//     const temp = items[firstIndex];
//     items[firstIndex] = items[secondIndex];
//     items[secondIndex] = temp;
// }
//
// function partition(items, left, right) {
//     var pivot = items[Math.floor((right + left) / 2)],
//         i = left,
//         j = right;
//
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j);
//             i++;
//             j--;
//         }
//     }
//     return i;
// }
//
// function quickSort(items, left, right) {
//     var index;
//
//     if (items.length > 1) {
//         left = typeof left !== "number" ? 0 : left;
//         right = typeof right !== "number" ? items.length - 1 : right;
//
//         index = partition(items, left, right);
//         if (left < index - 1) {
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) {
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
//
// var items = [4, 2, 6, 5, 3, 9];
// console.log(quickSort(items));
