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
