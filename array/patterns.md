### Sliding window pattern
- problem of sub array or substring with a contraint example: substring without repeating characters, substring with atmost 2 distinc characters or substring
- with atmost k distinct characters comes under this kind of problem trchinques:
  
  Template: 

  ```
  const n = s.length, map = new Map()
     let l = 0, r = 0, map = new Map(), n = s.length, max = 0
    for (; r < n; r++) {
     // update window
        while (invalid()) { // condition fails like map.size>k || map.has(char) && map.get(char)>=l 
         // perform some operation and shrink the window
            l++
        }
        max = Math.max(max, r - l + 1)
    }
    return max

  ```
### Running sum or product pattern
Example : Find a sub array with largest sum or product and return product.
https://leetcode.com/problems/maximum-product-subarray/description/
- In this kind of problems find running sum or product ending at an index and maintain maxSum or product variable.
- Solution for above problem
  
```
var maxSubArray = function (nums) {
    let runningSum = 0, maxSum = -Infinity
    for (let num of nums) {
        runningSum = runningSum >= 0 ? runningSum + num : num;
        maxSum = Math.max(maxSum, runningSum)
    }
    return maxSum
};
```

