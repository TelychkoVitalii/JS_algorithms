/*
* The Proxy pattern provides a surrogate or placeholder object for another object and controls access
* to this other object. In object-oriented programming, objects do the work they advertise through their interface
* (properties and methods). Clients of these objects expect this work to be done quickly and efficiently.
* However, there are situations where an object is severely constrained and cannot live up to its responsibility.
* Typically this occurs when there is a dependency on a remote resource (resulting in network latency) or
* when an object takes a long time to load.
*/

function GeoCoder() {
    this.getLatLng = function(address) {
        if (address === "Amsterdam") {
            return "52.3700° N, 4.8900° E";
        } else if (address === "London") {
            return "51.5171° N, 0.1062° W";
        } else if (address === "Paris") {
            return "48.8742° N, 2.3470° E";
        } else if (address === "Berlin") {
            return "52.5233° N, 13.4127° E";
        } else {
            return "";
        }
    };
}

function GeoProxy() {
    var geocoder = new GeoCoder();
    var geocache = {};

    return {
        getLatLng: function(address) {
            if (!geocache[address]) {
                geocache[address] = geocoder.getLatLng(address);
            }
            log.add(address + ": " + geocache[address]);
            return geocache[address];
        },
        getCount: function() {
            var count = 0;
            for (var code in geocache) { count++; }
            return count;
        }
    };
}

// log helper

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();

function run() {
    var geo = new GeoProxy();

    // geolocation requests

    geo.getLatLng("Paris");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("London");
    geo.getLatLng("London");

    log.add("\nCache size: " + geo.getCount());
    log.show();
}

run();