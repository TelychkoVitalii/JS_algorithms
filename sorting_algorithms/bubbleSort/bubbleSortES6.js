const arr = [13, 2, 5, 7, 8, 4, 1, 0, 9, 6]
const size = arr.length
 
const version1 = arr => {
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      if(arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    }
  }
}

// optimized version
const version2 = arr => { 
  for(let i = 0; i < size; i++) {
    for(let j = i; j > 0; j--) {
      if(arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    }
  }
}

version2(arr)
console.log(arr)
