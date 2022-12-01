// Heap is variant of tree data structure
// Binary heap can be of 2 types 1. Min heap 2. Max Heap
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.heap = [];
  }
  swapTwoIndexValue(i, j) {
    const v1 = this.heap[i];
    const v2 = this.heap[j];
    this.heap[i] = v2;
    this.heap[j] = v1;
  }
  extractMin() {
    this.swapTwoIndexValue(0, this.heap.length - 1);
    const val = this.heap.pop();
    if(this.heap.length)
    this.bubbleDown();
    return val;
  }
  bubbleDown() {
    let current = 0;
    let min;
    while (2 * current + 1 < this.heap.length) {
      let c1 = 2 * current + 1;
      let c2 = 2 * current + 2;
      if (this.heap[c1].priority < this.heap[c2].priority) {
        min = c1;
      } else min = c2;
      if (this.heap[current].priority > this.heap[min].priority) {
        this.swapTwoIndexValue(current, min);
        current = min;
      } else break;
    }
  }
  insert(val, priority) {
    // insertion is two step process
    /* 
          1. Insert at the end of array
          2. Bubble up to fulfill heap property.
          */
    const node = new Node(val, priority);
    this.heap.push(node);
    this.bubbleUp();
  }
  bubbleUp() {
    /* 
          child node of a node at index n can be found at place 2n+1
          parent of a ndoe at index n can be found at place = (n-1)/2
  */
    let n = this.heap.length - 1;

    while (n > 0) {
      const parent = Math.floor((n - 1) / 1);
      if (this.heap[n].priority < this.heap[parent].priority) {
        const temp = this.heap[n];
        this.heap[n] = this.heap[parent];
        this.heap[parent] = temp;
      } else break;
      n = parent;
    }
  }
}

const heap = new PriorityQueue();
heap.insert(1,0);
heap.insert(2,15);
heap.insert(3,2);
heap.insert(8,10);
heap.insert(7,9);
heap.insert(5,11);
heap.insert(4,5);
console.log(heap.heap);
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.heap);
