// Heap is variant of tree data structure
// Binary heap can be of 2 types 1. Min heap 2. Max Heap

class MaxHeap {
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
      this.heap.pop();
      this.bubbleDown();
    }
    bubbleDown() {
      let current = 0;
      let max;
      while (2 * current + 1 < this.heap.length ) {
        let c1 = 2 * current + 1;
        let c2 = 2 * current + 2;
        if (this.heap[c1] > this.heap[c2]) {
          max = c1;
        } else max = c2;
        if (this.heap[current] < this.heap[max]) {
          this.swapTwoIndexValue(current, max);
          current = max;
        } else break;
      }
    }
    insert(node) {
      // insertion is two step process
      /* 
          1. Insert at the end of array
          2. Bubble up to fulfill heap property.
          */
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
        if (this.heap[n] > this.heap[parent]) {
          const temp = this.heap[n];
          this.heap[n] = this.heap[parent];
          this.heap[parent] = temp;
        } else break;
        n = parent;
      }
    }
  }
  
  const heap = new MinHeap();
  heap.insert(1);
  heap.insert(2);
  heap.insert(3);
  heap.insert(8);
  heap.insert(7);
  heap.insert(5);
  heap.insert(4);
  console.log(heap.heap);
  heap.extractMin();
  heap.extractMin();
  console.log(heap.heap);
  