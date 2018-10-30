// Recursive approach

// var value = [4, 5, 10, 11, 13],
//     size = [3, 4, 7, 8, 9],
//     capacity = 16,
//     n = 5;
//
// function max(a, b) {
//   return (a > b) ? a : b;
// }
//
// function knapsack(capacity, size, value, n) {
//   if (n === 0 || capacity === 0) {
//     return 0;
//   }
//   if (size[n - 1] > capacity) {
//     return knapsack(capacity, size, value, n - 1);
//   }
//   else {
//     return max(value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1), knapsack(capacity, size, value, n - 1));
//   }
// }
//
// console.log(knapsack(capacity, size, value, n));

// Dynamic Programming Approach

// var value = [4, 5, 10, 11, 13],
//     size = [3, 4, 7, 8, 9],
//     capacity = 16,
//     n = 5;
//
// function max(a, b) {
//   return (a > b) ? a : b;
// }
// function dKnapsack(capacity, size, value, n) {
//   var K = [], j, i, w;
//   for (j = 0; j <= capacity + 1; j += 1) {
//     K[j] = [];
//   }
//   for (i = 0; i <= n; i += 1) {
//     for (w = 0; w <= capacity; w += 1) {
//       if (i === 0 || w === 0) {
//         K[i][w] = 0;
//       }
//       else if (size[i - 1] <= w) {
//         K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]],
//           K[i - 1][w]);
//       }
//       else {
//         K[i][w] = K[i - 1][w];
//       }
//     }
//   }
//   return K[n][capacity];
// }
//
// console.log(dKnapsack(capacity, size, value, n));