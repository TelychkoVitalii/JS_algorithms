/* Insertion sort algorithm
*  Complexity: O(N^2).
*  @param Array - as input
*  @return Array - sorted
*/

var arr = [3, 2, 5, 7, 8, 4, 1, 0, 9, 6], size = arr.length, i, j, temp;

// 1. Example ES5
for(i = 0; i < size; i += 1) {
    temp = arr[i];
    j = i - 1;
    while(j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j -= 1;
    }
    arr[j + 1] = temp;
}