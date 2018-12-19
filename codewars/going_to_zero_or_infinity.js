function going(n) {
  if(n >= 1) {
    if(n === 1) {
      return 1;
    } return (1 / going(n)) * going(n - 1);
  }
}

console.log(going(5));