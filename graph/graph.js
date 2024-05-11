class Graph{
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
      q.push(v)
      
      while(q.length){
          const node= q.shift();
          visited.add(node)
          const list = this.adjencyList.get(node)
          for(let n of list){
              if(!visited.has(n))
              q.push(n)
          }
          
      }  
      return Array.from(visited)     
  }
}

const g=new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('B','D')
g.addEdge('C','E')
g.addEdge('D','E')
g.print()
g.bfs('A')