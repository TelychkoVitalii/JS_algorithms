// Array.prototype.myReduce = function(callback, initialVal) {
//     var accumulator = (initialVal === undefined) ? undefined : initialVal, i, size = this.length;
//     for (i = 0; i < size; i += 1) {
//         if (accumulator !== undefined) {
//             accumulator = callback.call(undefined, accumulator, this[i], i, this);
//         } else {
//             accumulator = this[i];
//         }
//     }
//     return accumulator;
// };