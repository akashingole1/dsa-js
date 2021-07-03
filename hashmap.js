function hashFunction(key, cap) {
    let hash = 17;
    for (let i = 0; i < key.length; i++) {
        hash = (13 * hash * key.charCodeAt(i)) % cap;

    }
    return hash;
    // return key % cap;
}

export default class HashTable {
    table;
    cap;

    constructor(cap) {
        this.cap = cap;
        this.table = new Array(cap).fill(null);
    }

    setItem = (key, value) => {
        let idx = hashFunction(key, this.cap);
        // console.log('idx', idx);
        this.table[idx] = value
    }

    getItem = (key) => {
        let idx = hashFunction(key, this.cap);
        return this.table[idx];
    }
}

const p = new HashTable(10);
p.setItem('name', 'Akash');
p.setItem('age', 23);
p.setItem('place', 'India');
p.setItem('age', '22');
// console.log('name>>', p.getItem('name'));
// console.log('age>>', p.getItem('age'));
// console.log('place>>', p.getItem('place'));
// console.log('aaa>>', p.getItem('age'));
