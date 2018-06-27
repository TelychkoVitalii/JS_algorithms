function Queue() {
    this.queue = [];
}

Queue.prototype.enqueue = function(value) {
    this.queue.push(value);
};

Queue.prototype.dequeue = function() {
    return this.queue.shift();
};

Queue.prototype.peek = function() {
    return this.queue[0];
};

Queue.prototype.length = function() {
    return this.queue.length;
};

Queue.prototype.print = function() {
    console.log(this.queue.join(' '));
};

// var queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.print(); // => 1 2 3