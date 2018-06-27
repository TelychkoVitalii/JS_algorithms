function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    this.remove = remove;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
}

function show() {
    return this.data;
}

function insert(data) {
    var n = new Node(data, null, null);
    if(this.root === null) {
        this.root = n;
    } else {
        var current = this.root, parent;
        while(true) {
            parent = current;
            if(data < current.data) {
                current = current.left;
                if(current === null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if(current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function remove(data) {
    this.root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if(node === null) {
        return null;
    }
    if(data === node.data) {
        if (node.left === null && node.right === null) {
            return null;
        }
        if (node.left === null) {
            return node.right;
        }
        if (node.right === null) {
            return node.left;
        }
    } else if(data === node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}

function inOrder(node) {
    if(!(node === null)) {}
    inOrder(node.left);
    console.log(node.show() + '');
    inOrder(node.right);
}

function preOrder(node) {
    if (!(node === null)) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (!(node === null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

console.log(nums);