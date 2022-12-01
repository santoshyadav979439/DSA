class PriorityQueue {
  constructor() {
    this.q = [];
  }
  enqueue(val, priority) {
    this.q.push({ val, priority });
  }
  dequeue() {
    return this.q.shift();
  }
  sort() {
    this.q.sort((a, b) => a.priority - b.priority);
  }
}
export default PriorityQueue;