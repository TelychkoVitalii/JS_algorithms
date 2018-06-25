/*
* The Adapter pattern translates one interface (an object's properties and methods) to another. Adapters allows
* programming components to work together that otherwise wouldn't because of mismatched interfaces.
* The Adapter pattern is also referred to as the Wrapper Pattern.
* One scenario where Adapters are commonly used is when new components need to be integrated and work together with
* existing components in the application.
*/

// old interface
function Shipping() {
    this.request = function (zipStart, zipEnd, weight) {
        // ... logic
        return '$49.75';
    }
}

// new interface
function AdvancedShipping() {
    this.login = function (credentials) { /* ... */ };
    this.setStart = function (start) { /* ... */ };
    this.setDestination = function(destination) { /* ... */ };
    this.calculate = function(weight) { return "$39.50"; };
}

// adapter interface
function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();
    shipping.login(credentials);
    return {
        request: function (zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    }
}

function run() {
    var shipping = new Shipping(),
        credentials = {token: '23m3m4k20b'},
        adapter = new ShippingAdapter(credentials),
        cost = shipping.request("78701", "10010", "2 lbs");

    log.add("Old cost: " + cost);

    cost = adapter.request("78701", "10010", "2 lbs");

    log.add("New cost: " + cost);
    log.show();
}


// log helper
var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

