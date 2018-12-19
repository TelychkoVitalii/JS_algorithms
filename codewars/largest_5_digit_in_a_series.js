function solution(digits) {
  let arrOfDigits = digits.toString().split(''), arrLength = arrOfDigits.length, i, arr = [], j = 5;
  for (i = 0; i < arrLength; i += 1) {
    arr.push(+arrOfDigits.slice(i, j++).join(''));
  }
  return Math.max.apply(Math, arr);
}

solution(52323542352354);