function Queue() {
    this.fila = [];//[]
    this.count = 0;
}

// Queue.prototype.enqueue = function (value) {//
//     this.fila.push(value);
// }

Queue.prototype.enqueue = function (value) {
    this.fila[this.size()] = value;
    this.count++;
}

// Queue.prototype.dequeue = function () {
//     if (this.fila.length < 1) {//0<1
//         return undefined;
//     } else {
//         return this.fila.shift();//
//     }
// }

Queue.prototype.dequeue = function () {
    if (this.fila.length < 1) {
        return undefined;
    } else {
        const frontElement = this.fila[0];

        for (let i = 0; i < this.fila.length - 1; i++) {
            this.fila[i] = this.fila[i + 1];
        }

        this.fila.length--;
        this.count--;

        return frontElement;
    }
}

// Queue.prototype.size = function () {
//     return this.fila.length;
// }

Queue.prototype.size = function () {
    return this.count;
}

let queue = new Queue();
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(1);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);