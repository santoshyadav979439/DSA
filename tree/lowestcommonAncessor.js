/*
First the given nodes p and q are to be searched in a binary tree and then their lowest common ancestor is to be found.
We can resort to a normal tree traversal to search for the two nodes. Once we reach the desired nodes p and q, we can backtrack and
find the lowest common ancestor.

The approach is pretty intuitive. Traverse the tree in a depth first manner. The moment you encounter either of the nodes p or q, return some boolean flag. The flag helps to determine if we found the required nodes in any of the paths. The least common ancestor would then be the node for which both the subtree recursions return a True flag. It can also be the node which itself is one of p or q and for which one of the subtree recursions returns a True flag.

Let us look at the formal algorithm based on this idea.

Algorithm

Start traversing the tree from the root node.
If the current node itself is one of p or q, we would mark a variable mid as True and continue the search for the other node in the left and right branches.
If either of the left or the right branch returns True, this means one of the two nodes was found below.
If at any point in the traversal, any two of the three flags left, right or mid become True, this means we have found the lowest common ancestor for the nodes p and q.
*/
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root == null || root === p || root === q) return root
    const left = lowestCommonAncestor(root.left,p,q)
    const right = lowestCommonAncestor(root.right,p,q)
    if(left && right) return root;
    return left || right
   
};
