### Undirected Graph

```class Graph{
  constructor(){
      this.adjencyList=new Map()
  }
  addVertex(v){
     this.adjencyList.set(v,new Set()) 
  }
  addEdge(v1,v2){
      this.adjencyList.get(v1).add(v2)
      this.adjencyList.get(v2).add(v1)
  }
  print(){
      for(let [v,list] of this.adjencyList){
          console.log(v+'=>',list)
      }
  }
  dfs(v){
      const result =[]
      const visited=new Set();
  
    const solve= (function (v){
      const list = this.adjencyList.get(v)
       visited.add(v)
          result.push(v)  
          for(let node of list){
              if(!visited.has(node))
              solve(node)
          }
      }).bind(this)
      solve(v)
      return result
      
  }
  bfs(v){
      const visited = new Set()
      const q=[]
      visired.add(v)
      q.push(v)
      
      while(q.length){
          const node= q.shift();
          visited.add(node)
          const list = this.adjencyList.get(node)
          for(let n of list){
              if(!visited.has(n))
              {
                visited.add(n)
                 q.push(n)
              }
          }
          
      }  
      return Array.from(visited)     
  }
}
```
### Directed weighted Graph
<img width="746" alt="Screenshot 2024-06-15 at 15 44 18" src="https://github.com/santoshyadav979439/DSA/assets/49767268/59f14cd9-f83c-4818-8b95-380a34a55f3e">
Edge between 2 graphs can be respresented as (v1,v2) where v1 and v2 are 2 nodes. Edge can be labeled with weight wi

/*Weighted Directed Graph*/
```class Graph{
    constructor(){
        this.adjList=new Map();
    }
    // add Edge between V1 and V2
   addEdge(v1,v2,weight){
       // neighbours of v1
    const neighbour1= this.adjList.get(v1) || []
       neighbour1.push({node:v2,weight:weight})
       this.adjList.set(v1,neighbour1)
   }
    dfs(v){
        const visited=new Set()
        const result=[]
        this.dfsUtil(v,visited,result)
        return result
    }
    dfsUtil(v,visited,result){
       if(!visited.has(v)){
           visited.add(v)
           result.push(v) 
           const neighbours= this.adjList.get(v)
           if(neighbours){
           for(let {node} of neighbours){
               this.dfsUtil(node,visited,result)
           }
           }
           // to backtract do pop from arr at the end 
       }
    }
    
}

const graph = new Graph()
graph.addEdge(2,3,4)
graph.addEdge(3,4,8)
graph.addEdge(4,2,9)
graph.addEdge(2,401,9)
console.log(graph.dfs(2))
```
#### Find path between 2 nodes 
  - node is source, arr is to store the path
```function dfs(node, target, arr, visited, adjList) {
    if (!visited.has(node) && adjList.has(node)) {
        visited.add(node)
        arr.push(node)
        if (node === target)
            return true

        const neighbours = adjList.get(node)
        if (neighbours) {
            for (let neighbour of neighbours) {
                if (dfs(neighbour.node, target, arr, visited, adjList))
                    return true
            }
        }
        arr.pop()

    }
} ```
Problems based on above concept
1. https://leetcode.com/problems/evaluate-division/?envType=study-plan-v2&envId=top-interview-150
