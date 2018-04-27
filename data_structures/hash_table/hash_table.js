// function HashTable() {
//     this.table = new Array(137);
//     this.simpleHash = simpleHash;
//     this.showDistro = showDistro;
//     this.put = put;
// }
//
// function put(data) {
//     var pos = this.simpleHash(data);
//     this.table[pos] = data;
// }
//
// function simpleHash(data) {
//     var total = 0, i, size = data.length;
//     for(i = 0; i < size; i += 1) {
//         total += data.charCodeAt(i);
//     }
//     return total % this.table.length;
// }
//
// function showDistro() {
//     var n = 0, i;
//     for(i = 0; i < this.table.length; i += 1) {
//         if(this.table[i] !== undefined) {
//             console.log(i + ': ' + this.table[i]);
//         }
//     }
// }
//
// var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
// var hTable = new HashTable();
//
// for(var i = 0; i < someNames.length; i += 1) {
//     hTable.put(someNames[i]);
// }
//
// hTable.showDistro();