function maxSequence(arr){
  let i, len = arr.length, sum = 0, min = 0, ans = 0;
  for(i = 0; i < len; i += 1) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}