// Link - https://closure-compiler.appspot.com/home
// 1. Inlining:  process of replacing a call site with the body of the called function.
//    LZ77 - lossless data compression algorithm. Achieve compression by replacing repeated occurrences of data with references to a single copy of that data existing earlier in the uncompressed data stream.

// 2. Hidden class: try to fix object layout
//    Retrieving the value of a property in JavaScript more computationally expensive than
//    it would be in a non-dynamic programming language like Java or C#.
// Hidden Class Example

// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }
// var p1 = new Point(1, 2);
// p1.a = 5;
// p1.b = 6;
// var p2 = new Point(3, 4);
// p2.b = 7;
// p2.a = 8;

// Thus, “p1” and “p2” end up with different hidden classes as a result of the different transition paths.
// In such cases, it’s much better to initialize dynamic properties in the same order so
// that the hidden classes can be reused.

// 3. Inline caching or PIC (polymorphic inline cache)
//    Relies on the observation that repeated calls to the same method tend to occur on the same type of object.

// Tips:
// 1. Order of object properties:  always instantiate your object properties in the same order so that hidden classes.
// 2. Dynamic properties: assign all of an object’s properties in its constructor.
// 3. Methods: code that executes the same method repeatedly will run faster than code that executes many different methods only once (due to inline caching).
// 4. Arrays: avoid sparse arrays where keys are not incremental numbers. Also, try to avoid pre-allocating large arrays. It’s better to grow as you go. Finally, don’t delete elements in arrays. It makes the keys sparse.
