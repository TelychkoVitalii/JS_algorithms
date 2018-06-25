/*
* A Factory Method creates new objects as instructed by the client.
* One way to create objects in JavaScript is by invoking a constructor function with the new operator.
* There are situations however, where the client does not, or should not, know which one of several
* candidate objects to instantiate. The Factory Method allows the client to delegate object creation while
* still retaining control over which type to instantiate
*/

function Factory() {
    this.createEmployee = function (type) {
        var employee;
        if (type === "fulltime") {
            employee = new FullTime();
        } else if (type === "parttime") {
            employee = new PartTime();
        } else if (type === "temporary") {
            employee = new Temporary();
        } else if (type === "contractor") {
            employee = new Contractor();
        }

        employee.type = type;

        employee.say = function () {
            log.add(this.type + ": rate " + this.hourly + "/hour");
        };

        return employee;
    }
}

var FullTime = function () {
    this.hourly = "$12";
};

var PartTime = function () {
    this.hourly = "$11";
};

var Temporary = function () {
    this.hourly = "$10";
};

var Contractor = function () {
    this.hourly = "$15";
};

// log helper
var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

function run() {
    var employees = [],
        factory = new Factory(),
        size = employees.length,
        i;

    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("temporary"));
    employees.push(factory.createEmployee("contractor"));

    for (i = 0; i < size; i += 1) {
        employees[i].say();
    }

    log.show();
}

run();