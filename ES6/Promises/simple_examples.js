// 1.
// import {readFile} from 'fs';
//
// function readFilePromisified(filename) {
//   return new Promise(
//     function (resolve, reject) {
//       readFile(filename, { encoding: 'utf8' },
//         (error, data) => {
//           if (error) {
//             reject(error);
//           } else {
//             resolve(data);
//           }
//         });
//     });
// }
//
// readFilePromisified(process.argv[2])
//   .then(text => {
//     console.log(text);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// 2.

// function httpGet(url) {
//   return new Promise(
//     function (resolve, reject) {
//       const request = new XMLHttpRequest();
//       request.onload = function () {
//         if (this.status === 200) {
//           // Success
//           resolve(this.response);
//         } else {
//           // Something went wrong (404 etc.)
//           reject(new Error(this.statusText));
//         }
//       };
//       request.onerror = function () {
//         reject(new Error(
//           'XMLHttpRequest Error: '+this.statusText));
//       };
//       request.open('GET', url);
//       request.send();
//     });
// }
//
// httpGet('http://example.com/file.txt')
//   .then(
//     function (value) {
//       console.log('Contents: ' + value);
//     },
//     function (reason) {
//       console.error('Something went wrong', reason);
//     });


// 3.

// function delay(ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, ms); // (A)
//   });
// }
//
// // Using delay():
// delay(3000).then(function () { // (B)
//   console.log('5 seconds have passed!')
// }, function () {
//   console.log('Error');
// });

// 4.
// function timeout(ms, promise) {
//   return new Promise(function (resolve, reject) {
//     promise.then(resolve);
//     setTimeout(function () {
//       reject(new Error('Timeout after '+ms+' ms')); // (A)
//     }, ms);
//   });
// }
//
// timeout(5000, httpGet('http://example.com/file.txt'))
//   .then(function (value) {
//     console.log('Contents: ' + value);
//   })
//   .catch(function (reason) {
//     console.error('Error or timeout', reason);
//   });

// Note that the rejection after the timeout (in line A) does not cancel the request,
// but it does prevent the Promise being fulfilled with its result