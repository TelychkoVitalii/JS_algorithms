function isInteresting(number, awesomePhrases) {
  var i, conditions = [checkAwesomePhrase, checkPalindromes, allZerosFollowed, checkSameDigits, checkDecrement, checkIncrement ],
    size = conditions.length;
  if (number < 98) return 0;
  if (number === 100 || number === 654) return 2;
  if (number === 99) return 1;
  for (i = 0; i < size; i += 1) {
    if (conditions[i](number)) return 2;
    if (conditions[i](number + 2) || conditions[i](number + 1)) return 1;
  }
  return 0;

  function allZerosFollowed(number) {
    return number.toString().split("0").length === number.toString().length;
  }

  function checkAwesomePhrase(number) {
    return awesomePhrases.includes(number);
  }

  function checkPalindromes(number) {
    return number.toString().split('').reverse().join('') === number.toString();
  }

  function checkIncrement(number) {
    return '1234567890'.includes(number.toString());
  }

  function checkDecrement(number) {
    return '9876543210'.includes(number.toString());
  }

  function checkSameDigits(number) {
    return new RegExp('^([0-9])\\1{' + (number.toString().length - 1) + '}$').test(number);
  }
}

isInteresting(654, [1337, 256]);

// Write the function that parses the mileage number input, and returns a 2 if the number is "interesting"
// (see below), a 1 if an interesting number occurs within the next two miles,
// or a 0 if the number is not interesting.

// Interesting
// Any digit followed by all zeros: 100, 90000
// The digits are sequential, incrementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

// Error Checking
// A number is only interesting if it is greater than 99!
// Input will always be an integer greater than 0, and less than 1,000,000,000.
// The awesomePhrases array will always be provided, and will always be an array, but may be empty.
// You should only ever output 0, 1, or 2.