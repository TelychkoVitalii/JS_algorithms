// calculate the balance factor
var heightNode = function(node) {
    if (node === null) {
        return -1;
    } else {
        return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
    }
};

// single left rotation
if ((heightNode(node.left) - heightNode(node.right)) > 1) {
    var rotationRR = function (node) {
        var tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }
}


if ((heightNode(node.right) - heightNode(node.left)) > 1) {
    var rotationLL = function (node) {
        var tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }
}