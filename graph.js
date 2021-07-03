class Graph {
    vertices;
    // map of source and adj lists
    // @ts-ignore
    adjList: Map<number, number[]>;

    constructor(n) {
        // @ts-ignore
        this.adjList = new Map<number, number[]>();
        for (let i = 0; i < n; i++) {
            this.adjList.set(i, []);
        }
        this.vertices = n;
        // console.log('adjList', this.adjList);
    }

    //u->source and v->destination
    addEdges(u, v) {
        this.adjList.get(u).push(v);
        //For undirected graph
        // commented for Kosaraju's algorithm
        // this.adjList.get(v).push(u);
    }

    printEdges() {
        // @ts-ignore
        for (let [key, value] of this.adjList.entries()) {
            console.log(`Adjacency list for ${key} is: ${value.join(',')}`)
        }
    }

    bfs(s) {
        const visited = new Array(this.vertices).fill(false);
        console.log('visited array>>', visited);
        const queue = [];
        queue.push(s);
        visited[s] = true;
        while (queue.length) {
            let u = queue.shift();
            console.log('bfs graph traversal>>', u);
            this.adjList.get(u).forEach(el => {
                if (!visited[el]) {
                    queue.push(el)
                    visited[el] = true;
                }
            })
        }
    }

//    we can do this iterative also by using stack
    dfsRec(s, visited) {
        visited[s] = true;
        console.log('dfs graph traversal>>', s);
        this.adjList.get(s).forEach(el => {
            if (!visited[el]) {
                this.dfsRec(el, visited);
            }
        })
    }

    dfs(s) {
        const visited = new Array(this.vertices).fill(false);
        this.dfsRec(s, visited);
    }

//    Kosaraju's Algorithm start ////////////////////////////////////////
    firstDfs(s, visited, stack: number[]) {
        visited[s] = true;
        console.log('dfs graph traversal>>', s);
        this.adjList.get(s).forEach(el => {
            if (!visited[el]) {
                this.firstDfs(el, visited, stack);
            }
        })
        stack.push(s);
        console.log('s>>', stack)
    }

    graphTranspose() {
        let gr = new Graph(5);
        for (let i = 0; i < gr.vertices; i++) {
            this.adjList.get(i).map(el => {
                gr.adjList.get(el).push(i);
            })
        }
        console.log('gr>>', gr);
        return gr;
    }

    // print strongly connected component
    printSCC() {
        let visited = new Array(this.vertices).fill(false);
        let stack = [];
        for (let i = 0; i < this.vertices; i++) {
            if (!visited[i]) {
                this.firstDfs(i, visited, stack);
            }
        }
        console.log('stack>>', stack);

        let transpose = this.graphTranspose();

        visited = new Array(this.vertices).fill(false);
        while (stack.length){
            let el = stack.pop();
            if (!visited[el]){
                transpose.dfsRec(el, visited);
                console.log('\n');
            }
        }
    }
//    Kosaraju's Algorithm end ///////////////////////////////////////////
}

// const g = new Graph(4);
// g.addEdges(0, 1);
// g.addEdges(0, 2);
// g.addEdges(1, 3);
// g.addEdges(2, 3);
// g.printEdges();
// g.bfs(0);
// g.dfs(0);


//Kosaraju's Algorithm
const g = new Graph(5);
g.addEdges(1, 0);
g.addEdges(0, 2);
g.addEdges(2, 1);
g.addEdges(0, 3);
g.addEdges(3, 4);
g.printEdges();
g.printSCC();
