// function Node(element) {
//     this.element = element;
//     this.next = null;
// }
//
// function LList() {
//     this.head = new Node('head');
//     this.find = find;
//     this.insert = insert;
//     this.remove = remove;
//     this.display = display;
// }
//
// function find(item) {
//     var currNode = this.head;
//     while(currNode.element !== item) {
//         currNode = currNode.next;
//     }
//     return currNode;
// }
//
// function insert(newElement, item) {
//     var newNode = new Node(newElement),
//         current = this.find(item);
//     newNode.next = current.next;
//     current.next = newNode;
// }
//
// function display() {
//     var currNode = this.head;
//     while (!(currNode.next === null)) {
//         console.log(currNode.next.element);
//         currNode = currNode.next;
//     }
// }
//
// function findPrevious(item) {
//     var currNode = this.head;
//     while (!(currNode.next === null) && (currNode.next.element !== item)) {
//         currNode = currNode.next;
//     }
//     return currNode;
// }
//
// function remove(item) {
//     var prevNode = this.findPrevious(item);
//     if(!(prevNode === null)) {
//         prevNode.next = prevNode.next.next;
//     }
// }
//
// var cities = new LList();
// cities.insert('Conway', 'head');
// cities.insert('RusselVille', 'Conway');
// cities.insert('Alma', 'RusselVille');
// cities.display();
// cities.find('Alma');
// cities.display();