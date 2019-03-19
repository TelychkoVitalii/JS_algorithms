class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    var node = new Node(element), current;
    if(this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }
}

var list = new LinkedList();
list.add('Vitalii');
list.add('Bob');
console.log(list);