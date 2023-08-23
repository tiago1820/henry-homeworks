function Queue() {
    this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
    return this.array.push(elemento);
}

Queue.prototype.dequeue = function () {
    return this.array.shift();
}

Queue.prototype.size = function () {
    return this.array.length;
}

Queue.prototype.mergeQueues = function (queueOne, queueTwo) {
    //[7,2,3,4,5,6]
    let newQueue = new Queue();//[]
    while (queueOne.size() || queueTwo.size()) {
        let first = queueOne.dequeue();
        let second = queueTwo.dequeue();

        if (first) newQueue.enqueue(first)
        if (second) newQueue.enqueue(second)

    }

    return newQueue;//
}

let queueOne = new Queue();
queueOne.enqueue(7);
queueOne.enqueue(3);
queueOne.enqueue(5);

let queueTwo = new Queue();
queueTwo.enqueue(2);
queueTwo.enqueue(4);
queueTwo.enqueue(6);

let queue = new Queue();
console.log(queue.mergeQueues(queueOne, queueTwo))