function findOutlier(integers){
  let oddArray = [], evenArray = [];
  integers.forEach(integer => integer % 2 !== 0 ? oddArray.push(integer) : evenArray.push(integer));
  return oddArray.length === 1 ? oddArray[0] : evenArray[0];
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);