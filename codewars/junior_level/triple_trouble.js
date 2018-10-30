function tripledouble(num1, num2) {
  var str1 = num1.toString(), str2 = num2.toString(), len = str1.length, i;
  for (i = 0; i < len; i += 1) {
    if (str1[i] === str1[i + 1]) {
      if (str2.indexOf(str1[i] + str1[i]) > -1) return 1;
    }
  }
  return 0;
}