function HashTable() {
    this.table = new Array(137);
    // this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
}

// modular hashing
// function simpleHash(data) {
//     var total = 0, i;
//     for(i = 0; i < data.length; i += 1) {
//         total += data.charCodeAt(i);
//     }
//     return total % this.table.length;
// }

// Horner's Method
function betterHash(string) {
    var H = 37, total = 0, i;
    for(i = 0; i < string.length; i += 1) {
        total += H * total + string.charCodeAt(i)
    }
    total = total % this.table.length;
    return parseInt(total);
}

function put(data) {
    var pos = this.betterHash(data);
    // var pos = this.simpleHash(data);
    this.table[pos] = data;
}

function get(key) {
    return this.table[this.betterHash(key)];
}

    function showDistro() {
    var n = 0, i;
    for(i = 0; i < this.table.length; i += 1) {
        if(this.table[i] !== undefined) {
            console.log(i + ': ' + this.table[i]);
        }
    }
}

var hashTable = new HashTable(),
    someNames = ['Bob', 'Steve', 'John', 'Lora', 'David', 'Jennifer', 'Danny', 'Mike', 'Clayton', 'Raymond'], i,
    size = someNames.length;

for(i = 0; i < size; i += 1) {
    hashTable.put(someNames[i]);
}

hashTable.showDistro();

// function HashTable() {
//     var table = [];
//     var loseloseHashCode = function (key) {
//         var hash = 0, i;
//         for(i = 0; i < key.length; i += 1) {
//             hash += key.charCodeAt(i);
//         }
//         return hash % 37;
//     };
//     this.put = function (key, value) {
//         var pos = loseloseHashCode(key);
//         console.log(pos + '-' + key);
//         table[pos] = value;
//     };
//     this.get = function (key) {
//         return table[loseloseHashCode(key)];
//     };
//     this.remove = function (key) {
//         table[loseloseHashCode(key)] = undefined;
//     }
// }
//
// var hashTable = new HashTable();
// hashTable.put('Gandalf', 'gandalf@email.com');
// hashTable.put('John', 'johnsnow@email.com');
// hashTable.put('Tyrion', 'tyrion@email.com');
// console.log(hashTable.get('Gandalf'));
// console.log(hashTable.get('Loiane'));