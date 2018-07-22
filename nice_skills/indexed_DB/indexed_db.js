var btn_menu = document.getElementById('button_menu'),
    db,
    indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB;

function manipulateData(event) {
    var action = event.target.getAttribute('data-key'),
        open = indexedDB.open("MyDatabase", 1);

    // Create the schema
    open.onupgradeneeded = function () {
        db = open.result;
        return db.createObjectStore("MyObjectStore", {keyPath: "id"})
            .createIndex("NameIndex", ["name.last", "name.first"]);
    };

    open.onsuccess = function () {
        // Start a new transaction
        db = open.result;
        var tx = db.transaction("MyObjectStore", "readwrite"),
            store = tx.objectStore("MyObjectStore"),
            index = store.index("NameIndex");

        // Add some data
        if(action === 'add') {
            store.add({id: 12345, name: {first: "John", last: "Doe"}, age: 42});
            store.add({id: 67890, name: {first: "Bob", last: "Smith"}, age: 35});
        } else if(action === 'get') {
            var getItemByKey = store.get(67890);
            getItemByKey.onsuccess = function (data) {
                console.log(data.target.result);
            }
        } else if(action === 'update') {
            store.put({id: 12345, name: {first: "John", last: "Steve"}, age: 45})
        } else if(action === 'remove') {
            // var c = store.clear();
            store.delete(67890);
            // c.onsuccess = function (data) {
            //     console.log('yes');
            // }
        }


        // Query the data
        // var getJohn = store.get(12345),
        //     getBob = index.get(["Smith", "Bob"]);
        //
        // getJohn.onsuccess = function () {
        //     console.log(getJohn.result.name.first);  // => "John"
        // };
        //
        // getBob.onsuccess = function () {
        //     console.log(getBob.result.name.last);   // => "Bob"
        // };

        // Close the db when the transaction is done
        tx.oncomplete = function () {
            db.close();
        };
    };
}

btn_menu.addEventListener('click', manipulateData, false);

