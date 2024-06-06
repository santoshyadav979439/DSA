/*
1. traverse the tree and find p and q, return true if you find p or q. if both subtree of node returns true then node is LCA. If node is 
one of p or q then any of subtree will contain other node. hence node itself will be LCA.
*/
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root == null || root === p || root === q) return root
    const left = lowestCommonAncestor(root.left,p,q)
    const right = lowestCommonAncestor(root.right,p,q)
    if(left && right) return root;
    return left || right
   
};
