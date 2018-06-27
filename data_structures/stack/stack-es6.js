class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    length() {
        return this.stack.length;
    }

    print() {
        console.log(this.stack.join(' '));
    }
}
//
// // const stack = new Stack();
// // stack.push(1);
// // stack.push(2);
// // stack.push(3);
// // stack.print(); // => 1 2 3