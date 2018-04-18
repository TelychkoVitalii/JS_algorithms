var arr = [3, 2, 5, 7, 8, 4, 1, 0, 9, 6], size = arr.length, i, j, temp;

for(i = 0; i < size; i += 1) {
    for(j = 0; j < size; j += 1) {
        if(arr[j - 1] > arr[j]) {
            temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);