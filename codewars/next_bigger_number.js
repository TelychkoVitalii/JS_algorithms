function nextBigger(n){
  var str = n.toString().split(''), size = str.length, temp;
  for(var i = 0; i < size; i += 1) {
    if(str[i + 1] > str[i]) {
      temp = str[i];
      str[i] = str[i + 1];
      str[i + 1] = temp;
    }
  }
  return +str.join('');
}

console.log(nextBigger(2017));