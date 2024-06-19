- Distance between source and traget can be found using bfs.
- Path between source and target can also be found.
- In is similar to tree level by level traversal where we store each level data in array.
- Implementation can be also done in same way as we do in three.
- Inside while loop initialize a count variable and n= queue.length. Run a for loop from 0 to n-1 and get neighbours. This is leetcode editorial approach.
- Alernatively we can do simple bfs and push in queue node and currentLevel + 1. Example: 
https://leetcode.com/problems/word-ladder/description/

Solution: 
```
var minMutation = function (startGene, endGene, bank) {
    if (!bank.includes(endGene)) return -1
    const q = []
    q.push([startGene, 0])
    const visited = new Set()
    while (q.length) {
        const [node, d] = q.shift(); 
        visited.add(node)
        const neighbours = getNeighbours(node, bank)
        if (neighbours) {
            for (let neighbour of neighbours) {

                if (neighbour === endGene) {
                    return d + 1;
                }
                if (!visited.has(neighbour))
                    q.push([neighbour, d + 1])
            }
        }
    }
    return -1
};

function getNeighbours(node, bank) {
    const result = []
    for (let gene of bank) {
        let count = 0
        for (let i = 0; i < node.length; i++) {
            if (gene[i] !== node[i])
                count++
        }
        if (count == 1)
            result.push(gene)
    }
    return result;
}
```
Similar Problem: 
https://leetcode.com/problems/minimum-genetic-mutation/description/
