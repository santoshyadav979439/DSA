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
