
class Graph {
  constructor(no) {
    this.noOFVerices = no;
    this.adjencyList = new Map();
  }
  addVirtices(v) {
    this.adjencyList.set(v, new Set());
  }
  addEdge(v1, v2) {
    this.adjencyList.get(v1).add(v2);
    this.adjencyList.get(v2).add(v1);
  }
  print() {
    for (const [v, list] of this.adjencyList) {
      console.log(v + '=>');
      for (let node of list) console.log(node);
    }
  }
  bfs(v) {
    const q = [];
    const visited = new Set();
    q.push(v);
    visited.add(v);
    while (q.length) {
      const v = q.shift();
      visited.add(v);
      console.log(v);
      const list = this.adjencyList.get(v);
      for (let node of list) {
        if (!visited.has(node)) {
          q.push(node);
        }
      }
    }
  }
}
const virtices = [1, 2, 3, 4, 5];
const g = new Graph(5);
virtices.forEach((node) => g.addVirtices(node));
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(2, 3);
g.addEdge(3, 4);
g.addEdge(4, 5);
g.addEdge(3, 5);
g.bfs(1);

