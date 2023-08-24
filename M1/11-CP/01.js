function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    //1 < 4
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    }
    this.left.insert(value);
  }

  if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    }
    this.right.insert(value);
  }
};

BinarySearchTree.prototype.spotHousePrices = function (minPrice) {
  const result = [];

  const traverse = (node) => {
    if (node === null) {
      return;
    }

    if (node.value >= minPrice) {
      result.push(node.value);
    }

    traverse(node.left);
    traverse(node.right);
  };

  traverse(this);

  const filteredResult = result.filter((value) => value !== minPrice);

  return filteredResult;
};

const bst = new BinarySearchTree(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);

const minPrice = 4;
const pricesGreaterOrEqual = bst.spotHousePrices(minPrice);
console.log(pricesGreaterOrEqual);
