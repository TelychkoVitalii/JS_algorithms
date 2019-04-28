// https://blog.domenic.me/the-revealing-constructor-pattern/

var p = new Promise(function (resolve, reject) { // “executor function”
  // Use `resolve` to resolve `p`.
  // Use `reject` to reject `p`.
});

// I call this the revealing constructor pattern because the Promise constructor is revealing its internal capabilities,
// but only to the code that constructs the promise in question.
// The ability to resolve or reject the promise is only revealed to the constructing code,
// and is crucially not revealed to anyone using the promise.