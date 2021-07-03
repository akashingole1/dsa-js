class BNode {
    data;
    left;
    right;

    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

class Pair {
    node: BNode;
    hd: number;

    constructor(n, d) {
        this.node = n;
        this.hd = d;
    }
}

class BinaryTree {
    root;
    height;

    constructor() {
        this.root = null;
        this.height = 0
    }

    addNode(el?: any) {
    let node = new BNode(el);
    if (!this.root) {
    this.root = node;
} else {
    // this.root.left = new BNode(20);
    // this.root.left.left = new BNode(40);
    // this.root.left.right = new BNode(50);
    // this.root.right = new BNode(30);

    // BST
    this.root.left = new BNode(5);
    this.root.right = new BNode(15);
    this.root.right.left = new BNode(12);
    this.root.right.right = new BNode(18);
}
this.height++;
}

getNode() {
    return this.root
}

printKthNode(root, level, k = 2) {
    if (!root) return;
    if (level === k) {
        console.log('kth node', root.data);
    } else {
        this.printKthNode(root.left, level + 1);
        this.printKthNode(root.right, level + 1);
    }
}

delNode(root: BNode, x) {
    if (!root) return root;
    if (root.data > x) {
        root.left = this.delNode(root.left, x);
    } else if (root.data < x) {
        root.right = this.delNode(root.right, x);
    } else {
        if (!root.right) {
            return root.left;
        } else if (!root.left) {
            return root.right;
        } else {
            let succ = this.getSuccessor(root);
            console.log('succ>>', succ);
            root.data = succ.data;
            root.right = this.delNode(root.right, succ.data)
        }
    }
    return root;
}

getSuccessor(cur): BNode {
    cur = cur.right;
    while (!cur && !cur.left) {
        cur = cur.left;
    }
    return cur;
}

kthSmallest(root, k, c) {
    // arr.sort((a, b) => a-b);
    // console.log('kth:', arr[k-1]);
    if (!root) {
        this.kthSmallest(root.left, k, c);
        c++;
        if (c == k) {
            console.log('kth smallest:', root);
            return;
        }
        this.kthSmallest(root.right, k, c);
    }
}

ceilingToLeft(arr) {
    console.log(-1);
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let diff = Number.MAX_VALUE;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                diff = Math.min(diff, (arr[j] - arr[i]));
            }
        }
        if (diff === Number.MAX_VALUE) {
            console.log(-1)
        } else {
            console.log(arr[i] + diff);
        }
    }
}

static vSum(root, hd, obj) {
    if (!root) return;
    //inorder traversal
    this.vSum(root.left, hd - 1, obj);
    if (obj[hd]) {
        obj[hd] += root.data;
    } else {
        obj[hd] = root.data;
    }
    this.vSum(root.right, hd + 1, obj);
    this.vSumPrint(obj);
}

static vSumPrint(obj) {
    console.log('obj>>', obj);
    Object.keys(obj).map(el => console.log('vSum: ', obj[el]));
}

inorder(root, arr = []) {
    if (!root) return;
    this.inorder(root.left, arr);
    console.log(root.data);
    arr.push(root);
    console.log('Tree arr: ', arr);
    this.inorder(root.right, arr);
}

vTraversal(root: BNode) {
    //    we will be using array as queue (used op are push and shift)
    let queue = [];
    let map: { [key: number]: number[] } = {};
    queue.push(new Pair(root, 0));
    while (queue.length !== 0) {
        let val: Pair = queue.shift();
        console.log('val>>', val);
        let node = val.node;
        let hd = val.hd;
        if (map[hd]) {
            map[hd].push(node.data);
        } else {
            map[hd] = [node.data];
        }
        if (node.left) {
            queue.push(new Pair(node.left, hd - 1));
        }
        if (node.right) {
            queue.push(new Pair(node.right, hd + 1));
        }
    }
    console.log('map>>', map);
    Object.keys(map).sort((a, b) => +a - +b).map((el) => {
        let arr: number[] = map[el];
        let s = arr.join(',');
        console.log('vsum traversal: ', s);
        // arr.map((el, i) => console.log('vsum traversal: ', el));
    })
}

lca(root, n, m) {
    let path1 = [];
    let path2 = [];
    console.log('path1', path1);
    console.log('path2', path2);
    if (!this.findPath(root, n, path1) || !this.findPath(root, m, path2)) {
        return false;
    }
    for (let i = 0; i < path1.length && i < path2.length; i++) {
        if (path1[i + 1] !== path2[i + 1]) {
            return path1[i];
        }
    }
}

findPath(root: BNode, n: number, path: number[]): boolean {
    if (!root) return false;
    path.push(root.data);
    if (root.data === n) return true;
    if (this.findPath(root.left, n, path) || this.findPath(root.right, n, path)) {
        return true;
    }
    path.pop();
    return false;
}
}

const p1 = new BinaryTree();
p1.addNode(10);
p1.addNode();
// console.log('tree', p1.getNode());
let root = p1.getNode();
// p1.inorder(root);
// p1.printKthNode(root, 0, 2);
//
// let del = p1.delNode(root, 15);
// console.log('del>>', del);

// p1.kthSmallest([20, 30, 40, 10], 3, 0);
// p1.kthSmallest(root, 3, 0);
// p1.ceilingToLeft([20, 30, 40, 10]);

// BinaryTree.vSum(root, 0, {});

// p1.vTraversal(root);

console.log('lca>>', p1.lca(root, 12, 18));
