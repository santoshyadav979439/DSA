## Topological Sort
- Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u-v, vertex u comes before v in
  the ordering

  <img width="1096" alt="Screenshot 2024-05-21 at 23 14 21" src="https://github.com/santoshyadav979439/DSA/assets/49767268/a992edb8-c1ba-48c9-acd3-e682c53627d3">

As shown in above diagram 0 should come first in order before 1 or in other words 0 should be colpleted before 1. 
Topological sort problems can be solved easily with Kahn's algorithm.
Algorithm is as follows:
- Store in degree of all the nodes in an array. lets say a should be completed first before b then b is dependent on a. hence in degree of b will be 1.
- Take an adjency list to store all the nodes which have incoming node from key node. if a->b then {a:[b]}. means arrow is towards b
- Take all the nodes in queue which have indegree 0
- While queue is not empty
  - take first node from queue
  - store this in answer array
  - reduce indegree of all the dependent nodes. since this node has visited or proccessed.
  - check indegree immediatly after reducing it whether it is empty. If empty then push in queue
  -  repeat
- If there is still any node indegree more than 0 then there will be cycle otherwise return reverse of answer array.

### Example
https://leetcode.com/problems/course-schedule-ii/
```
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
      const map = new Map()
    const indegree = new Array(numCourses).fill(0)
    for (let i = 0; i < numCourses; i++) {
        map.set(i, new Set())
    }
    // fill adjlist & indegree array
    for (let [course1, course2] of prerequisites) {
        const dependents = map.get(course1)
        dependents.add(course2)
        map.set(course1, dependents)
        //indegree
        indegree[course2]++
    }
    const q = []
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0)
            q.push(i)
    }
    const ans=[]
    while (q.length) {
        const course = q.shift()
        ans.push(course)
        const dependents = map.get(course)
        for (let dependent of dependents) {
            indegree[dependent]--
            if (indegree[dependent] === 0)
                q.push(dependent)
        }

    }
    for(let i=0;i<indegree.length;i++){
        if(indegree[i]!==0)
        return []
    }
    return ans.reverse()
};
```
