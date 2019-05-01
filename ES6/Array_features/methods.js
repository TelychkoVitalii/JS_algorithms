// 1. Array.from

// const spans = document.querySelectorAll('span.name');
//
// // map(), generically:
// const names1 = Array.prototype.map.call(spans, s => s.textContent);
//
// // Array.from():
// const names2 = Array.from(spans, s => s.textContent);

// function f() {
//   const instanceOfArray = Array.from(arguments, x => x * 3);
//   console.log(instanceOfArray);
// }
//
// f(1, 2, 3);

// 2. Array.of

// const arr = Array.of(1, 'hello', false, { a: 2 });
// console.log(arr instanceof Array);

// 3. Array.prototype.entries()
// Array.from(['a', 'b'].keys())  => [ 0, 1 ]

// 4. Array.prototype.keys()
// Array.from(['a', 'b'].values()) => [ 'a', 'b' ]

// 5. Array.prototype.entries()
// Array.from(['a', 'b'].entries()) => [ [ 0, 'a' ], [ 1, 'b' ] ]

// [...['a', 'b'].keys()] => via spread operator

// for (const [index, element] of ['a', 'b'].entries()) {
//   console.log(index, element);
// }

// 6. Array.prototype.find(predicate, thisArg?)
// 7. Array.prototype.findIndex(predicate, thisArg?)

// [NaN].findIndex(y => Object.is(NaN, y))

// 8.  Array.prototype.copyWithin()

// const arr = [0, 1, 2, 3, 4, 5];
// arr.copyWithin(3, 3, 5);
// console.log(arr);
// 9. Array.prototype.fill()

// const arr = ['a', 'b', 'c'];
// arr.fill(7)
//  [ 7, 7, 7 ]

// Restrict

// ['a', 'b', 'c'].fill(7, 1, 2); // [ 'a', 7, 'c' ]

// Treat holes like undefined
// Array.from(['a',,'b']); //  [ 'a', undefined, 'b' ]

/*

forEach(), filter(), every() and some() ignore holes.
map() skips but preserves holes.
join() and toString() treat holes as if they were undefined elements, but interprets both null and undefined as empty strings.

copyWithin() creates holes when copying holes (i.e., it deletes elements if necessary).
entries(), keys(), values() treat each hole as if it was the element undefined.
find() and findIndex() do the same.
fill() doesn’t care whether there are elements at indices or not.

*/