/*
* The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when
* the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript.
* The Observer pattern facilitates good object-oriented design and promotes loose coupling.
*/

function Click() {
    this.handlers = []; // observers
}

Click.prototype = {
    subscribe: function (fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter(function (item) {
            if(item !== fn) {
                return item;
            }
        })
    },

    fire: function (o, thisObj) {
        this.handlers.forEach(function (item) {
            item.call(thisObj, o);
        })
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
    var clickHandler = function (item) {
        log.add('fired: ' + item);
    };

    var click = new Click();

    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
}

run();