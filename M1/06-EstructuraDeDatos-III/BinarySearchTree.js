function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}


BinarySearchTree.prototype.size = function () {//
    if (!this.left && !this.right) return 1;
    if (this.left && !this.right) return 1 + this.left.size();
    if (!this.left && this.right) return 1 + this.right.size();
    if (this.left && this.right) return 1 + this.left.size() + this.right.size();
}
BinarySearchTree.prototype.insert = function (value) {//1
    //    
    if (value < this.value) {//1 < 5
        if (!this.left) {
            this.left = new BinarySearchTree(value);//{value:4,left:null,right:null}
        }
        this.left.insert(value);//{value:1,left:null,right:null}
    }
    //    7 > 5
    if (value > this.value) {
        if (!this.right) {
            this.right = new BinarySearchTree(value);//{value:7,left:null,right:null}
        }
        this.right.insert(value);
    }
}

BinarySearchTree.prototype.contains = function (value) {//4
    if (this.value === value) return true;//5 === 4
    //                                        
    if (this.left && this.left.contains(value)) return true;
    //                                  4
    if (this.right && this.right.contains(value)) return true;

    return false;

}

//{value:5,left:{value:4,left:{value:1,left:null,right:null},right:null},|right:{value:7,left:null,right:null}}
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {//post-order
    if (order === 'pre-order') {//
        cb(this.value);//5417
        if (this.left) this.left.depthFirstForEach(cb, order);//
        if (this.right) this.right.depthFirstForEach(cb, order);
    } else if (order === 'post-order') {//1475
        if (this.left) this.left.depthFirstForEach(cb, order);
        if (this.right) this.right.depthFirstForEach(cb, order);
        cb(this.value);
    } else {//1457
        if (this.left) this.left.depthFirstForEach(cb, order);
        cb(this.value);
        if (this.right) this.right.depthFirstForEach(cb, order);
    }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {//
    //array = [];

    cb(this.value);//5471
    if (this.left) array.push(this.left);
    if (this.right) array.push(this.right);

    //          0 > 0            
    if (array.length > 0) array.shift().breadthFirstForEach(cb, array);
}

function cb(value) {
    console.log(value);
}

let tree = new BinarySearchTree(5);
tree.insert(7);
tree.insert(4);
tree.insert(1);
tree.breadthFirstForEach(cb);