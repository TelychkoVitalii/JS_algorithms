/*
  Three kinds of calls can be made anywhere in ES6:
  Function calls: func(3, 1)
  Method calls: obj.method('abc')
  Constructor calls: new Constr(8)
*/

// Calls via super are restricted to specific locations

/*

Super-method calls: super.method('abc')
Only available within method definitions inside either object literals or derived class definitions.
Super-constructor calls: super(8)
Only available inside the special method constructor() inside a derived class definition.

*/

// const obj = {
//   name: 'Vitalii',
//   showName: () => {
//     console.log(this);
//   }
// };
//
// obj.showName();