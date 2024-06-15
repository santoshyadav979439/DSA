## Problems based on connected components 
  - These are graph based problems where we need to find out connected components.
  - These problems can be solved usind DFS or BFS.
Example: https://leetcode.com/problems/number-of-islands/description/
As in this problem we need to find number of islands-
To solve above problem approch is very simple.
- Consider each 1 in array as node and neighbours can be found in  4 directions where array elemnt is 1.
  Neighbours can be found for a node as below.
   4 directions can be found by adding these value to index of array element [0-1], [-1,0],[1,0],[0,1]
  Full solution as follows
  
  ```
var numIslands = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const visited = new Array(m)
    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false)
    }
    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && grid[i][j] == '1') {
                bfs([i, j])
                count++
            }
        }
    }
    return count
    function bfs(node) {
        const q = []
        const [i, j] = node
        visited[i][j] = true
        q.push(node)
        while (q.length) {
            const node = q.shift()
            const neighbours = getNeighbours(node)
            for (let [row, col] of neighbours) {
                if (!visited[row][col] && grid[row][col] === '1') {
                    visited[row][col] = true;
                    q.push([row, col])
                }
            }
        }

    }

    function getNeighbours([i, j]) {
        const deltaIndexes = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        return deltaIndexes.map(([detaRow, deltacol]) => [detaRow + i, deltacol + j]).filter(([row, col]) => row >= 0 && col >= 0 && row < m && col < n && grid[row][col] === '1')
    }
}
  ```
