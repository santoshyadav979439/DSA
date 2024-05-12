# Traversal
 ## DFS
### Preorder 
 ```preorder(root){
    if(root===null)
       return 
    visit(root)
    preorder(root.left)
    preorder(root.right)
  }
  ```
### Inorder 
```inorder(root){
  if(root===null)
    return
  inorder(root.left)
  visit(root)
  inorder(root.right)
}
```
### Postorder 
`postorder(root){
  if(root===null)
    return
  postorder(root.left)
  postorder(root.right)
  visit(root)
}
```
