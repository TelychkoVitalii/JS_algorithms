/* Selection sort algorithm
*  Complexity: O(N^2).
*  @param Array - as input
*  @return Array - sorted
*/

var arr = [3, 2, 5, 7, 8, 4, 1, 0, 9, 6], size = arr.length, i, j, temp, min;

// 1. Example ES5
function swap(i, j, arr) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

for(i = 0; i < size; i += 1) {
    min = i;
    for(j = i + 1; j < size; j += 1) {
        if(arr[j] < arr[min]) {
            min = j;
        }
    }
    if(i !== min) {
        swap(i, min, arr);
    }
}

// 2. Example ES6
for(i = 0; i < size; i += 1) {
    min = i;
    for(j = i + 1; j < size; j += 1) {
        if(arr[j] < arr[min]) {
            min = j;
        }
    }
    if(i !== min) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
}

// console.log(arr);