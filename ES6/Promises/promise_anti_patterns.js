// Nested Promises

// BAD
// loadSomething().then(function(something) {
//   loadAnotherthing().then(function(another) {
//     DoSomethingOnThem(something, another);
//   });
// });

// GOOD
// q.all([loadSomething(), loadAnotherThing()])
//   .spread(function(something, another) {
//     DoSomethingOnThem(something, another);
//   });

// The Broken Chain

// BAD
// function anAsyncCall() {
//   var promise = doSomethingAsync();
//   promise.then(function() {
//     somethingComplicated();
//   });
//
//   return promise;
// }

// GOOD
// function anAsyncCall() {
//   var promise = doSomethingAsync();
//   return promise.then(function() {
//     somethingComplicated()
//   });
// }
