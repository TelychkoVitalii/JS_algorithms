// console.log('script start');
//
// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);
//
// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });
//
// console.log('script end');


/*

Each 'thread' gets its own event loop, so each web worker gets its own, so it can execute independently,
 whereas all windows on the same origin share an event loop as they can synchronously communicate.
 The event loop runs continually, executing any tasks queued.
 An event loop has multiple task sources which guarantees execution order within that source
 (specs such as IndexedDB define their own),
 but the browser gets to pick which source to take a task from on each turn of the loop.
This allows the browser to give preference to performance sensitive tasks such as user-input.

macrotasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
microtasks: process.nextTick, Promises, Object.observe, MutationObserver

*/