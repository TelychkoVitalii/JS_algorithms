function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    // this.subset = subset;
    this.difference = difference;
    this.show = show;
}

function add(data) {
    if(this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if(pos > - 1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

function contains(data) {
    return this.dataStore.indexOf(data) > -1;
}

function union(set) {
    var tempSet = new Set(), i, j;
    for(i = 0; i < this.dataStore.length; i += 1) {
        tempSet.add(this.dataStore[i]);
    }
    for(j = 0; j < set.dataStore.length; j += 1) {
        if(!tempSet.contains(set.dataStore[j])) {
            tempSet.dataStore.push(set.dataStore[j]);
        }
    }
    return tempSet;
}

function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i += 1) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function show() {
    return this.dataStore;
}

function size() {
    return this.dataStore.length;
}

function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i += 1) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}
//
// var Names = new Set();
// Names.add('David');
// Names.add('Bob');
// Names.add('Steve');
// console.log(Names.show());