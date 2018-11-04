function quickSort(list) {
  var lesser = [], greater = [], pivot = list[0], i, size = list.length, item;
  if(size === 0) return [];
  for(i = 1; i < size; i += 1) {
    item = list[i];
    item < pivot ? lesser.push(item) : greater.push(item);
  }
  return quickSort(lesser).concat(pivot, quickSort(greater));
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
quickSort(list);