function HashTable() {
    this.table = new Array(137);
    this.genStuData = genStuData;
    this.showDistro = showDistro;
    this.put = put;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
    var i, j;
    for(i = 0; i < arr.length; i += 1) {
        var num = '';
        for(j = 1; j < 9; j += 1) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandom(50, 100);
        arr[i] = num;
    }
}

function showDistro() {
    var n = 0, i;
    for(i = 0; i < this.table.length; i += 1) {
        if(this.table[i] !== undefined) {
            console.log(i + ': ' + this.table[i]);
        }
    }
}

function put(data) {
    var pos = this.genStuData(data);
    this.table[pos] = data;
}

var numStudents = 10,
    arrSize = 97,
    idLen = 9,
    students = new Array(numStudents),
    hashTable = new HashTable(), i;

genStuData(students);

for(i = 0; i < students.length; i += 1) {
    console.log(students[i].substring(0, 8) + ' ' + students[i].substring(9));
}

for (i = 0; i < students.length; ++i) {
    hashTable.put(students[i]);
}

hashTable.showDistro();