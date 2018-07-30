// Fisher-Yates shuffle algorithm
function shuffle(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1)),
            itemAtIndex = arr[randomIndex];

        arr[randomIndex] = arr[i];
        arr[i] = itemAtIndex;
    }
    return arr;
}

const arr = [5, 8, 6, 9, 1, 7, 3, 2, 4];
console.log(shuffle(arr));