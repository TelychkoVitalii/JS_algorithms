// 1. Template Literals
// are string literals that can stretch across multiple lines and include interpolated expressions (inserted via ${···}):

// const firstName = `Jane`;
// console.log(`Hello ${firstName}!
// How are
// you?
// `);

// 2. Tagged template literals (short: tagged templates) are created by mentioning a function before a template literal
//    The common usages of tag functions is getting the raw data out of template string.

// function fmtDate(strings, date) {
//   const str0 = strings[0], str1 = strings[1];
//   console.log(strings)
//   const strDate = new Intl.DateTimeFormat('en-US').format(date);
//   console.log(`${str0}${strDate}${str1}`);
//   return `${str0}${strDate}${str1}`;
// }
//
// fmtDate`Today is ${new Date()}`;

// console.log(String.raw`first ${new Date()}`)

// 3. A tag function for HTML templating

// function html(templateObject, ...substs) {
//   console.log(substs);
//   const raw = templateObject.raw;
//
//   let result = '';
//
//   substs.forEach((subst, i) => {
//     let lit = raw[i];
//     if (Array.isArray(subst)) {
//       subst = subst.join('');
//     }
//
//     if (lit.endsWith('!')) {
//       subst = htmlEscape(subst);
//       lit = lit.slice(0, -1);
//     }
//     result += lit;
//     result += subst;
//   });
//   result += raw[raw.length - 1]; // (A)
//   return result;
// }
//
// function htmlEscape(str) {
//   return str.replace(/&/g, '&amp;') // first!
//     .replace(/>/g, '&gt;')
//     .replace(/</g, '&lt;')
//     .replace(/"/g, '&quot;')
//     .replace(/'/g, '&#39;')
//     .replace(/`/g, '&#96;');
// }
//
// const tmpl = addrs => html`
//     <table>
//     ${addrs.map(addr => html`
//         <tr><td>!${addr.first}</td></tr>
//         <tr><td>!${addr.last}</td></tr>
//     `)}
//     </table>
// `;
// const data = [
//   { first: '<Jane>', last: 'Bond' },
//   { first: 'Lars', last: '<Croft>' },
// ];
// console.log(tmpl(data));