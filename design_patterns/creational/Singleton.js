/*
* The Singleton Pattern limits the number of instances of a particular object to just one.
* This single instance is called the singleton.
* Singletons are useful in situations where system-wide actions need to be coordinated from a single central place.
* An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all
* database connections for the entire application ensuring that no connections are 'lost'.
*/


function Universe() {
    var instance = this;

    this.start_time = 0;
    this.bang = 'Big';

    Universe = function () {
        return instance;
    };
}

var uni = new Universe(),
    uni2 = new Universe();
console.log(uni === uni2); // true