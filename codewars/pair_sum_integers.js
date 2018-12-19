var sample_data = [0, 1, 100, 99, 0, 10, 90, 30, 55, 33];

function pairsWithSum(sum, data) {
  let pairs = [], i = 0, size = data.length, j = size - 1, a, b;
  data.sort((a, b) => a - b);
  while (i < j && j >= 0) {
    a = data[i];
    b = data[j];
    if (a + b === sum) {
      pairs.push([a, b]);
      while (i < size && data[i] === a) {
        i += 1;
      }
      while (j >= 0 && data[j] === b) {
        j -= 1;
      }
    } else if (a + b < sum) while(i < size && data[i += 1] === a);
    else while(j >= 0 && data[j -= 1] === b);
  }
  return pairs;
}

pairsWithSum(100, sample_data);
