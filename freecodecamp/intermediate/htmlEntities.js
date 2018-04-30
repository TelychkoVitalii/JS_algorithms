// function convertHTML(str) {
//     var entities = {
//         '&': '&amp;',
//         "'": '&apos;',
//         '"': '&quot;',
//         '<': '&lt;',
//         '>': '&gt;'
//     }, prop;
//
//     for(prop in entities) {
//         str = str.replace(new RegExp(prop, 'g'), entities[prop]);
//     }
//     return str;
// }
//
// convertHTML("Hamburgers < Pizza < Tacos");