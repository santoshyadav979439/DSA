/* 
*Diameter of tree kisi bhi node se ja skta h. Hum hr
*ek node ki left side depth(Maximum distance from node to leaf node) and right side depth
*calculate krte hain. Temp Diameter will be calculated as leftDepth+rightDepth+1.Maximum of all temp 
*diameter will be result
*/

// Here we are modifying the maximum height of binary tree code
var diameterOfBinaryTree = function(root) {
    let ans=0;
      function height(root){
         if(root===null) return 0;
          const l=height(root.left) // find left depth
          const r=height(root.right) // find right depth
          ans= Math.max(ans,l+r+1) // temp diameter of node will be 1+l+r, Max diamer so for is ans=Math.max(ans,l+r+1)
          return 1+Math.max(l,r) // return Height
      }
      height(root)
      return ans-1; // It is giving no of node. Result should be no of edges (node-1)
  };