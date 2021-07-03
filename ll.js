class Node {
    data;
    next;

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head;
    size;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
            // return this.head;
        } else {
            let cur = this.head;
            while (cur.next) {
                cur = cur.next
            }
            cur.next = node;
        }
        // let t1 = new Node(30);
        // let t2 = new Node(40);
        // node.next = t1;
        // t1.next = t2;
        // return node;
        this.size++;
    }

    print() {
        let cur = this.head;
        while (cur) {
            console.log(cur.data);
            cur = cur.next;
        }
    }

    length() {
        return this.size;
    }

}

let llist = new LinkedList();
llist.add(10)
llist.add(20)
llist.add(30)
llist.add(40)
llist.add(50)
llist.print();

// console.log(llist.length());
