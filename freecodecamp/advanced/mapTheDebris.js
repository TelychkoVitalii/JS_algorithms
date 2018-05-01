// function orbitalPeriod(arr) {
//      return arr.map(function (t) {
//          var GM = 398600.4418, earthRadius = 6367.4447,
//              period = Math.round((2 * Math.PI) * Math.sqrt(Math.pow(earthRadius + t.avgAlt, 3) / GM));
//            delete t.avgAlt;
//            t.orbitalPeriod = period;
//            return t;
//         });
// }
//
// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);