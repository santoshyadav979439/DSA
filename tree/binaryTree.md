# Traversal
 ## DFS
### Preorder 
 ```
preorder(root){
    if(root===null)
       return 
    visit(root)
    preorder(root.left)
    preorder(root.right)
  }
  ```
### Inorder 
```
inorder(root){
  if(root===null)
    return
  inorder(root.left)
  visit(root)
  inorder(root.right)
}
```
### Postorder 
```
postorder(root){
  if(root===null)
    return
  postorder(root.left)
  postorder(root.right)
  visit(root)
}
```
 ### BFS or level order traversal
  lavel order traversal can be done using queue data structure. It can be done using iterative approach. Algo is simple
   1. Add root to queue (Q)
   2. while Q is not empty do following
      1. Get first element from Q using shift of array and store this in node
      2. Visit node -
      3. if node has left child insert that in Q
      4. if node have right child insert that in Q
      5. Repeat 2
     
 ```
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
```
## Height of binary tree
 ```
 height(node)
    {
        if(node===null) return 0
        return Math.max(1+this.height(node.left),1+this.height(node.right))
    }
   ```
## Calculate diameter or path in binary tree 
1. https://leetcode.com/problems/binary-tree-maximum-path-sum/
2. https://leetcode.com/problems/diameter-of-binary-tree/description/
![Screenshot 2024-05-14 at 21 59 14](https://github.com/santoshyadav979439/DSA/assets/49767268/47252bc3-6dbe-4298-a05a-45f0c1eca051)
 Above problems can solved using same strategy.
Solution :
```
1. Diameter of tree
var diameterOfBinaryTree = function (root) {
    let result = -Infinity
    function path(root) {
        if (root === null) return 0
        const leftPath = path(root.left)
        const rightPath = path(root.right)
        const total=leftPath + rightPath + 1
        result = Math.max(total,result)
        return Math.max(leftPath, rightPath) + 1
    }
    path(root)
    return result - 1 // It is giving no of node. Result should be no of edges (node-1)
};
```
2.Binary tree Maximum Path Sum
   ```
var maxPathSum = function (root) {
    let result = -Infinity
    function path(root) {
        if (root === null) return 0;
        const leftPath = Math.max(0, path(root.left))
        const rightPath = Math.max(0, path(root.right))
        const total = leftPath + rightPath + root.val;
        result = Math.max(result, total)
        return Math.max(leftPath, rightPath) + root.val
    }
    path(root)
    return result;
};
```
As we can see both problems are same only diffrence is that 
1. cost is stored as node value in second problem and we are returning
total sum of node value instead of edge sum. 
2. we are ignoring negative sum of nodes value since it will not maximize total sum. The path wgich is contributing negative cost can be ignored.
   
