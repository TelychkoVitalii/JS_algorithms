// cross site scripting (XSS)
// const body = document.body;
// body.innerHTML = '<script>alert("XSS Attack !!!")</script>'; // could prevent
// body.innerHTML = '<img src=x onerror="alert(\'XSS Attack\')">'; // could not prevent

// use textContent
// body.textContent = '<img src=x onerror="alert(\'XSS Attack\')">';

// if you’re adding some third-party content as part of some additional markup, you’ll still want to use innerHTML.

// var sanitizeHTML = function (str) {
//   var temp = document.createElement('div');
//   temp.textContent = str;
//   return temp.innerHTML;
// };
//
// body.innerHTML = sanitizeHTML('<img src=x onerror="alert(\'XSS Attack\')">');

