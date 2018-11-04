// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], count = 0;

// 1. Without Recursion
// function binarySearch(arr, target) {
//     let left = 0, right = arr.length - 1;
//     while (left <= right) {
//         const mid = left + Math.floor((right - left) / 2);
//         if (arr[mid] === target) return mid;
//         arr[mid] < target ? left = mid + 1 : right = mid - 1;
//         count++;
//     }
//     return -1;
// }
//
// binarySearch(array, 13);
// console.log(count);

// 2. With Recursion
// function binarySearchRecursive(arr, x, start, end) {
//     if (start > end) return false;
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === x) return true;
//     arr[mid] > x ? binarySearchRecursive(arr, x, start, mid - 1) : binarySearchRecursive(arr, x, mid + 1, end);
// }
//
// binarySearchRecursive(array, 13, 0, array.length - 1);