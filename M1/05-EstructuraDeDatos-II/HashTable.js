function HashTable() {
    this.numBuckets = 35;
    this.buckets = new Array(this.numBuckets);
}

HashTable.prototype.hash = function (key) {
    if (typeof key !== 'string') {
        throw new TypeError();
    }

    let hash = 0;
                
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);

    }
    
    return hash % this.numBuckets;
}

HashTable.prototype.set = function (key, value) {//instructora
    let index = this.hash(key);//24

    if (!this.buckets[index]) {//{, ,{}, }
        this.buckets[index] = {};
    }

    this.buckets[index][key] = value;//[ ,{instructora:'Ani'}, ]
}

HashTable.prototype.get = function (key) {//instructora
    let index = this.hash(key);//24

    if (!this.buckets[index] || !(key in this.buckets[index])) {//
        return undefined;
    }

    return this.buckets[index][key];
}

HashTable.prototype.hasKey = function (key) {//instructora
    let index = this.hash(key);//24

    return !!this.buckets[index] && key in this.buckets[index];
}


let table = new HashTable();
table.set('instructora', 'Ani');
table.set('alumno', 'Tiago');

console.log(table.get('alumno'))
