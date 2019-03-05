// JavaScript’s global object (window in web browsers, global in Node.js) is more a bug than a feature,
// especially with regard to performance. That’s why it makes sense that ES6 introduces a distinction:
// All properties of the global object are global variables.
// In global scope, the following declarations create such properties:
//    var declarations
//    Function declarations
// But there are now also global variables that are not properties of the global object.
// In global scope, the following declarations create such variables:
//    let declarations
//    const declarations
//    Class declarations
// Note that the bodies of modules are not executed in global scope, only scripts are.
// Therefore, the environments for various variables form the following chain.