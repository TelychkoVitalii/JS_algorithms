function revrot(str, sz) {
  let i, args = Array.from(arguments), arr = str.split(''), chunkLength, newArray = [];
  if(sz <= 0 || str === '' || sz > str.length) return '';
  if(str.length % sz > 0) arr = args[0].slice(0, -(str.length % sz)).split('');
  for(i = 0, chunkLength = arr.length; i < chunkLength; i += sz) {
    newArray.push(arr.slice(i, i + sz));
  }
  newArray.map(chunkEl => {
    let chunk = chunkEl.map(elNum => Math.pow(+elNum, 3)).reduce((a, b) => a + b);
    Number.isInteger(chunk / 2) ? chunkEl.reverse() : chunkEl.push(chunkEl.shift());
  });
  return [].concat.apply([], newArray).join('');
}