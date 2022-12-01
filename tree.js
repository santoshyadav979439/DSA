class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const q = [];
    if (this.root === null) {
      this.root = new Node(data);
    } else {
      q.push(this.root);
      while (q.length !== 0) {
        const node = q.shift();
        if (node.left === null) {
          node.left = new Node(data);
          break;
        } else {
          q.push(node.left);
        }

        if (node.right === null) {
          node.right = new Node(data);
          break;
        } else {
          q.push(node.right);
        }
      }
    }
  }
  levelOrder(root) {
    let q = [];
    if (root !== null) q.push(root);
    while (q.length !== 0) {
      const node = q.shift();
      console.log(node.data);
      if (node.left != null) q.push(node.left);
      if (node.right != null) q.push(node.right);
    }
  }
}
const t = new Tree();
t.insert(2);
t.insert(3);
t.insert(4);
t.insert(5);
t.levelOrder(t.root);
