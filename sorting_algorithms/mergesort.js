function mergeSort(arr) {
    if(arr.length === 1) return arr;

    const middle = Math.floor(arr.length / 2),
          left = arr.slice(0, middle),
          right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [], indexLeft = 0, indexRight = 0;
    while (indexLeft < left.length && indexRight < right.length) {
        if(left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
mergeSort(list);