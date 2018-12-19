String.prototype.toJadenCase = function () {
  return this.split(' ').map(val => val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()).join(' ');
};

"How can mirrors be real if our eyes aren't real".toJadenCase();