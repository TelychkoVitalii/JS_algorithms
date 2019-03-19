// Differences
// 1. Key fields => in Object either string or integer or symbols, in Map - any
// 2. Element order => in Map original order of elements (pairs) is preserved, in Object - no
// 3. Inheritance => Map is an instance of Object, but Object is definitely not an instance of Map.

// var map = new Map([[1,2],[3,4]]);
// console.log(map instanceof Object); //true
// var obj = new Object();
// console.log(obj instanceof Map); //false