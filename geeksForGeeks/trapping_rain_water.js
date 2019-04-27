/*
* Given n non-negative integers representing an elevation map where the width of each bar is 1,
* compute how much water it is able to trap after raining.
*/

// var input = [0, 2, 0, 1, 0, 7, 1, 0, 3, 0, 0, 1, 0, 0];
//
// function calcWaterCapacity(heights) {
//   var heightsLength = heights.length, result = 0, array = [], i, j, k;
//
//   array[0] = { left: heights[0] };
//   for (i = 1; i < heightsLength; i += 1) {
//     array[i] = {};
//     array[i].left = Math.max(array[i - 1].left, heights[i]);
//   }
//
//   array[heightsLength - 1].right = heights[heightsLength - 1];
//   for (j = heightsLength - 2; j >= 0; j -= 1) {
//     array[j].right = Math.max(array[j + 1].right, heights[j]);
//   }
//
//   for (k = 1; k < heightsLength; k += 1) {
//     result += Math.min(array[k].left, array[k].right) - heights[k];
//   }
//
//   return result;
// }
//
// calcWaterCapacity(input);

