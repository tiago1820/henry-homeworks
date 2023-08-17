function LinkedList() {
    this.head = null;//{value:1,next:{value:'2',next:{value:false,next:{value:'Franco',next:null}}}}
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function (value) {
    if (this.head === null) {
        this.head = new Node(value);
    } else {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = new Node(value);
    }


}

LinkedList.prototype.remove = function () {
    if (this.head === null) {
        return null;
    } else if (this.head.next === null) {
        let valorRemovido = this.head.value;
        this.head = null;
        return valorRemovido;
    } else {
        let current = this.head;
        let anterior = null;
        while (current.next) {
            anterior = current;
            current = current.next;
        }

        let valorRemovido = current.value;
        anterior.next = null;

        return valorRemovido;
    }

}

LinkedList.prototype.search = function (param) {
    if (this.head === null) {
        return null;
    } else {
        let current = this.head;
        if (typeof param === 'function') {
            while (current !== null) {
                if (param(current.value)) {
                    return current.value;
                }
                current = current.next;
            }
        } else {
            while (current !== null) {
                if (current.value === param) {
                    return current.value;
                }

                current = current.next;
            }
        }
    }
    return null;

}

//{value:1,next:{value:'2',next:{value:false,next:{value:'Franco',next:null}}}}
LinkedList.prototype.changeNotNumbers = function () {
    let sum = 0;//
    let current = this.head;//{value:1,next:Node}
    while (current) {//null
        if (isNaN(current.value)) {
            current.value = "Kiricocho";//{value:'Kiricocho',next:null}
            sum++;
        }
        current = current.next;//null
    }
    return sum;//1
}

function isEven(n) {
    return n % 2 === 0;
}

//Head --> [1] --> ['2'] --> [false] --> ['Franco']
let lista = new LinkedList();
lista.add(1);
lista.add('2');
lista.add(false);
lista.add('Franco');
console.log(lista.changeNotNumbers());
