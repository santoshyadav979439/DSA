// Reference from Udemy course
class PriorityQueue {
  constructor() {
    this.q = [];
  }
  enqueue(val, priority) {
    this.q.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.q.shift();
  }
  sort() {
    this.q.sort((a, b) => a.priority - b.priority);
  }
}

class WeightTedGraph {
  constructor() {
    this.adjList = new Map();
  }
  addVertex(v) {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }
  addEdge(v1, v2, weight) {
    this.adjList.get(v1).push({ node: v2, weight });
    this.adjList.get(v2).push({ node: v1, weight });
  }
  dijkastra(source, dest) {
    // initialize distance array
    const distance = {};
    const visited = {}; // used to track which nodes are we already visited. if node is already visited, we will not add that in priority queue
    const parent = {}; // this is being used for getting sortest path to reach destination. it will help in getting node we are traversing
    Array.from(this.adjList.keys()).forEach((el) => {
      if (el === source) distance[el] = 0;
      else distance[el] = Infinity;
      // initialize visited null
      visited[el] = null;
    });
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(source, 0);
    console.log(priorityQueue);
    while (priorityQueue.q.length) {
      const smallest = priorityQueue.dequeue().val;

      visited[smallest] = true;
      console.log(smallest);
      if (smallest === dest) break;
      const neighbours = this.adjList.get(smallest);
      for (let { node, weight } of neighbours) {
        // update distace to reach to a node.(it will be calculated as distance till previous node + path from previous node or already calculated value me jo bhi minimum ho
        //d(v)=min(d(v),d(u)+d(u,v))
        //)
        distance[node] = Math.min(distance[smallest] + weight, distance[node]);
        if (!visited[node]) priorityQueue.enqueue(node, weight);
      }
    }
    return distance;
  }
}

const g = new WeightTedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 1);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);

/* console.log(g.adjList);
const p = new PriorityQueue();
p.enqueue(10, 1);
p.enqueue(20, 15);
p.enqueue(50, 3);
console.log(p.q, 'q is');
 */
console.log(g.dijkastra('A', 'E'));
