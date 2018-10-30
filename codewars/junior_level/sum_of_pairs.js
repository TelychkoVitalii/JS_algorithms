function sum_pairs(ints, s) {
  let intSet = new Set(), limit = ints.length, i, needed;
  intSet.add(ints[0]);
  for (i = 1; i < limit; i += 1) {
    needed = s - ints[i];
    if (intSet.has(needed)) {
      return [needed, ints[i]];
    }
    intSet.add(ints[i]);
  }
  return undefined;
}

sum_pairs([11, 3, 7, 5], 10);