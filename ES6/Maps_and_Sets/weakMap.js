// const wm = new WeakMap();
// // wm.set('abc', 123); // error (key must be an object)

// the keys in a WeakMap are weakly held: Normally, an object that isn’t referred to by any storage location
// (variable, property, etc.) can be garbage-collected.

// const wm = new WeakMap();
// wm.set({ text: 'abc' }, 123);

// Where to use
// 1. Caching computed results
// 2. Managing listeners
// 3. Keeping private data

// 1.
// const cache = new WeakMap();
// function countOwnKeys(obj) {
//   if (cache.has(obj)) {
//     console.log('Cached');
//     return cache.get(obj);
//   } else {
//     console.log('Computed');
//     const count = Object.keys(obj).length;
//     cache.set(obj, count);
//     return count;
//   }
// }

// 2.
// const _objToListeners = new WeakMap();
//
// function addListener(obj, listener) {
//   if (! _objToListeners.has(obj)) {
//     _objToListeners.set(obj, new Set());
//   }
//   _objToListeners.get(obj).add(listener);
// }
//
// function triggerListeners(obj) {
//   const listeners = _objToListeners.get(obj);
//   if (listeners) {
//     for (const listener of listeners) {
//       listener();
//     }
//   }
// }

// The advantage of using a WeakMap here is that, once an object is garbage-collected,
// its listeners will be garbage-collected, too.
// In other words: there won’t be any memory leaks.

// 3.
// const _counter = new WeakMap();
// const _action = new WeakMap();
// class Countdown {
//   constructor(counter, action) {
//     _counter.set(this, counter);
//     _action.set(this, action);
//   }
//   dec() {
//     let counter = _counter.get(this);
//     if (counter < 1) return;
//     counter--;
//     _counter.set(this, counter);
//     if (counter === 0) {
//       _action.get(this)();
//     }
//   }
// }
