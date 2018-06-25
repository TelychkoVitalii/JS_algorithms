/*
* The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request.
* This pattern is essentially a linear search for an object that can handle a particular request.
* An example of a chain-of-responsibility is event-bubbling in which an event propagates through a series of nested
* controls one of which may choose to handle the event.
* The Chain of Responsiblity patterns is related to the Chaining Pattern which is frequently used in JavaScript.
*/

var Request = function(amount) {
    this.amount = amount;
    log.add("Requested: $" + amount + "\n");
};

Request.prototype = {
    get: function(bill) {
        var count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        log.add("Dispense " + count + " $" + bill + " bills");
        return this;
    }
};

// log helper

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();

function run() {
    var request = new Request(378);

    request.get(100).get(50).get(20).get(10).get(5).get(1);

    log.show();
}

run();