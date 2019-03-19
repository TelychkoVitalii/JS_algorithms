/*

In ES5, a single construct, the (traditional) function, played three roles:

Real (non-method) function
Method
Constructor

In ES6, there is more specialization.
The three duties are now handled as follows.
As far as function definitions and class definitions are concerned, a definition is either a declaration or an expression.

Real (non-method) function:
Arrow functions (only have an expression form)
Traditional functions (created via function definitions)
Generator functions (created via generator function definitions)
Method:
Methods (created by method definitions in object literals and class definitions)
Generator methods (created by generator method definitions in object literals and class definitions)
Constructor:
Classes (created via class definitions)

*/