// PIPE
// The concept of pipe is simple — it combines n functions.
// It’s a pipe flowing left-to-right, calling each function with the output of the last one.

// 1.
// const getName = person => person.name;
// getName({ name: 'Buckethead' });

// 2.
// const uppercase = string => string.toUpperCase();
// uppercase(getName({ name: 'Buckethead' }));

// 3.
// const get6characters = string => string.substring(0, 6);
// get6characters(uppercase(getName({ name: 'Buckethead' })));

// 4.
// const reverse = string => string.split('').reverse().join('');
// console.log(reverse(get6characters(uppercase(getName({ name: 'Buckethead' })))));

// BETTER SOLUTION

// const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
// console.log(pipe(getName, uppercase, get6characters, reverse)({ name: 'Buckethead' }));


// COMPOSE
// Starts from another side

// const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
// console.log(compose(reverse, get6characters, uppercase, getName)({ name: 'Buckethead' }));