/*
An iterable is a data structure that wants to make its elements accessible to the public.
It does so by implementing a method whose key is Symbol.iterator.
That method is a factory for iterators.
An iterator is a pointer for traversing the elements of a data structure (think cursors in databases).
*/

// Iterable values - Arrays, Strings, Maps, Sets, DOM data structures (work in progress)

/*
Source: A value is considered iterable if it has a method whose key is the symbol Symbol.iterator
that returns a so-called iterator. The iterator is an object that returns values via its method next().
We say: it iterates over the items (the content) of the iterable, one per method call.
*/

// Example
const arr = ['a', 'b', 'c'];
const it = arr[Symbol.iterator]();
it.next();
it.next();
it.next();

/*
Iterable and iterators are part of a so-called protocol (interfaces plus rules for using them) for iteration.
A key characteristic of this protocol is that it is sequential: the iterator returns values one at a time. 
That means that if an iterable data structure is non-linear (such as a tree), iteration will linearize it.
*/
