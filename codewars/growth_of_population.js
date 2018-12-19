function nbYear(p0, percent, aug, p) {
  let counter = 0;
  while(p0 < p) {
    counter += 1;
    p0 = p0 + p0 * (percent / 100) + aug;
  }
  return counter;
}

nbYear(1500, 5, 100, 5000);