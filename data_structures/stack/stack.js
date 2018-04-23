function Stack() {
    this.stack = [];
}

Stack.prototype.push = function(value) {
    this.stack.push(value);
};

Stack.prototype.pop = function() {
    return this.stack.pop();
};

Stack.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
};

Stack.prototype.length = function() {
    return this.stack.length;
};

Stack.prototype.print = function() {
    console.log(this.stack.join(' '));
};

// var stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.print(); // => 1 2 3
// console.log(stack.peek());
