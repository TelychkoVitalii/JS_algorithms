/*
* The Decorator pattern extends (decorates) an object’s behavior dynamically.
* The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’
* around the original object. Multiple decorators can add or override functionality to the original object.
*/

var User = function (name) {
    this.name = name;
    this.say = function () {
        log.add('User: ' + this.name);
    }  
};

var DecoratedUser = function (user, street, city) {
    this.user = user;
    this.name = user.name; // ensures interface stays the same
    this.street = street;
    this.city = city;
    
    this.say = function () {
        log.add("Decorated User: " + this.name + ", " + this.street + ", " + this.city);
    }
};

// logging helper
var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();

function run() {
    var user = new User('Kelly');
    user.say();

    var decorated = new DecoratedUser(user, 'Broadway', 'New York');
    decorated.say();
    log.show();
}

run();