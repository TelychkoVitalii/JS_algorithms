/*
  What is displayed depends on the variable target (line B). If we had used var instead of const in line A,
  there would be a single binding for the whole loop and target would have the value 'vielleicht', afterwards.
  Thankfully, with const, we get one binding per loop iteration and the translations are displayed correctly.
*/

// const entries = [
//   ['yes', 'ja'],
//   ['no', 'nein'],
//   ['perhaps', 'vielleicht'],
// ];
//
// const content = document.getElementById('content');
//
// for (const [source, target] of entries) { // (A)
//   content.insertAdjacentHTML('beforeend', `<div><a id="${source}" href="">${source}</a></div>`);
//
//   document.getElementById(source).addEventListener('click', event => {
//       event.preventDefault();
//       alert(target); // (B)
//     });
// }