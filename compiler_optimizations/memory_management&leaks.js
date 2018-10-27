// Memory Lifecycle: allocate memory => use memory => clear memory
// Computer memory consists of a large number of flip flops.
// We can think of our entire computer memory as a just one giant array of bits that we can read and write.
// 8 bits = 1 byte

// 1. Static allocation: size must be known at compile time, assigned to the stack
// 2. Dynamic allocation: size must be unknown at compile time, assigned to the heap, no order of assignment

// The hardest task here is to figure out when the allocated memory is not needed any longer.

// 1. Reference-counting garbage collection: An object is considered “garbage collectible” if there are zero references pointing to it.
// Example where cycles are creating problems

// function f() {
//     var o1 = {};
//     var o2 = {};
//     o1.p = o2; // o1 references o2
//     o2.p = o1; // o2 references o1. This creates a cycle.
// }
//
// f();

// 2. Mark-and-sweep algorithm: In order to decide whether an object is needed, this algorithm determines whether the object is reachable.
// Steps:
// 2.1. Roots are global variables which get referenced in the code.
// 2.2. The algorithm then inspects all roots and their children and marks them as active (meaning, they are not garbage).
//      Anything that a root cannot reach will be marked as garbage.
// 2.3. Finally, the garbage collector frees all memory pieces that are not marked as active and returns that memory to the OS.

// Memory leaks: pieces of memory that the application have used in the past but is not needed any longer but has not yet been return back to the OS or the pool of free memory.

// 1. Global variables

// 2. Timers or callbacks that are forgotten
// Bad Example
// var serverData = loadData();
// setInterval(function() {
//     var renderer = document.getElementById('renderer');
//     if(renderer) {
//         renderer.innerHTML = JSON.stringify(serverData);
//     }
// }, 5000); //This will be executed every ~5 seconds.

// Good Example
// var element = document.getElementById('launch-button');
// var counter = 0;
// function onClick(event) {
//     counter++;
//     element.innerHtml = 'text ' + counter;
// }
// element.addEventListener('click', onClick);
// // Do stuff
// element.removeEventListener('click', onClick);
// element.parentNode.removeChild(element);

// With modern browsers we do need to do that

// 3. Closures
// Bad Example
// var theThing = null;
// var replaceThing = function () {
//     var originalThing = theThing;
//     var unused = function () {
//         if (originalThing)
//             console.log("hi");
//     };
//     theThing = {
//         longStr: new Array(1000000).join('*'),
//         someMethod: function () {
//             console.log(someMessage);
//         }
//     };
// };
// setInterval(replaceThing, 1000);

// Explanation
// Once replaceThing is called, theThing gets a new object which consists of a big array and a new closure (someMethod).
// Yet, originalThing is referenced by a closure that’s held by the unused variable (which is theThing variable from the previous call to replaceThing)

// 4. Out of DOM references
// var elements = {
//     button: document.getElementById('button'),
//     image: document.getElementById('image'),
//     text: document.getElementById('text')
// };

// When this happens, two references to the same DOM element are kept: one in the DOM tree and the other in the dictionary.
// If at some point in the future you decide to remove these rows, you need to make both references unreachable.
// At some point in the future you decide to remove the table from the DOM but keep the reference to that cell.
// Intuitively one may suppose the GC will collect everything but that cell.
// In practice this won't happen: the cell is a child node of that table and children keep references to their parents.
// In other words, the reference to the table cell from JavaScript code causes the whole table to stay in memory.


