function LinkedList() {
    this.head = null;//{value:5,next:{value:9,next:{value:4,next:{value:2,next:null}}}}
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function (value) {//
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

//{value:5,next:{value:9,next:{value:4,next:{value:2,next:null}}}}
LinkedList.prototype.remove = function () {
    if (this.head === null) {
        return null;
    } else if (this.head.next === null) {//
        let valorRemovido = this.head.value;
        this.head = null;
        return valorRemovido;
    } else {
        let current = this.head;
        let anterior = null;
        while (current.next) {//{value:2,next:null}
            anterior = current;//{value:4,next:Node}
            current = current.next;//{value:2,next:null}
        }

        let valorRemovido = current.value;//2
        anterior.next = null;//{value:4,next:null}

        return valorRemovido;//2
    }

}

//{value:5,next:{value:9,next:{value:4,next:{value:2,next:null}}}}
LinkedList.prototype.search = function (param) {//isEven
    if (this.head === null) {
        return null;
    } else {
        let current = this.head;//{value:5,next:Node}
        if(typeof param === 'function'){
            while(current !== null){//
                if(param(current.value)) {//
                    return current.value;//
                }
                current = current.next;//{value:4,next:Node}
            }
        } else {
            while(current !== null){//
                if(current.value === param){//4 === 4
                    return current.value;//
                }

                current = current.next;//{value:4,next:Node}
            }
        }
    }
    return null;

}

function isEven(n) {
    return n % 2 === 0;
}

let lista = new LinkedList();
lista.add(5);
lista.add(9);
lista.add(4);
lista.add(2);
lista.add(8);
console.log(lista.search(isEven))
