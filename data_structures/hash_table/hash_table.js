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