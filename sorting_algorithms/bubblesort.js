/* Bubble sort algorithm
*  Complexity: O(N^2).
*  @param Array - as input
*  @return Array - sorted
*/

var arr = [3, 2, 5, 7, 8, 4, 1, 0, 9, 6], size = arr.length, i, j, temp;

// 1. Simple example with variable
for(i = 0; i < size; i += 1) {
    for(j = 0; j < size; j += 1) {
        if(arr[j - 1] > arr[j]) {
            temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
        }
    }
}

// 2. Advanced example with variable
for (i = 0; i < size; i += 1) {
    for (j = i; j > 0; j -= 1) {
        if ((arr[j] - arr[j - 1]) < 0) {
            temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
}

// 3. Example with swap function (without variable)
function swap(a, b, arr) {
    arr[b] = arr[b] - arr[a];
    arr[a] = arr[a] + arr[b];
    arr[b] = arr[a] - arr[b];
}

for(i = 0; i < size; i += 1) {
    for(j = 0; j < size; j += 1) {
        if(arr[j - 1] > arr[j]) {
            swap(j - 1, j, arr);
        }
    }
}

// More concise solution
function swap(a, arr) {
    arr[a - 1] = arr[a - 1] - arr[a];
    arr[a] = arr[a] + arr[a - 1];
    arr[a - 1] = arr[a] - arr[a - 1];
}

for(i = 0; i < size; i += 1) {
    for(j = 0; j < size; j += 1) {
        if(arr[j - 1] > arr[j]) {
            swap(j, arr);
        }
    }
}

// 4. Example with single loop
function swap(arr, i) {
    arr[i] = arr[i] + arr[i - 1];
    arr[i - 1] = arr[i] - arr[i - 1];
    arr[i] = arr[i] - arr[i - 1];
}

for (i = size; i >= 0; i -= 1) {
    if (arr[i] < arr[i - 1]) {
        swap(arr, i);
        i = size;
    }
}

// 5. ES6 example
// const arr = [3, 2, 5, 7, 8, 4, 1, 0, 9, 6], size = arr.length;
for(let i = 0; i < size; i += 1) {
    for(let j = i; j > 0; j -= 1) {
        if(arr[j - 1] > arr[j]) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
        }
    }
}

// console.log(arr);
