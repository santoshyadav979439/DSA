### Binary Search
Binary search splits search space in halves and keeps half search space which will have target element and discards half search space. In this way binary search reduces search space in half until target element is found. 
Binary Search helps us reduce the search time from linear O(n) to logarithmic O(log n). But when it comes to implementation, it's rather difficult to write a bug-free code in just a few minutes.
Some of the most common problems include:
- When to exit the loop? Should we use left < right or left <= right as the while loop condition?
- How to initialize the boundary variable left and right?
- How to update the boundary? How to choose the appropriate combination from left = mid, left = mid + 1 and right = mid, right = mid - 1?

Suppose we have a search space. It could be an array, a range, etc. Usually it's sorted in ascending order. For most tasks, we can transform the requirement into the following generalized form:
Minimize k , s.t. condition(k) is True
The following code is the most generalized binary search template:

```
function binarySearch(array) {
  function condition(value) {
    // Implement the condition logic based on the specific problem
  }

  let left = Math.min(...search_space); // Replace search_space with the appropriate array or range
  let right = Math.max(...search_space); // Replace search_space with the appropriate array or range

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2); // Calculate the middle value

    if (condition(mid)) {
      right = mid; // If condition is true, move the right pointer to mid
    } else {
      left = mid + 1; // If condition is false, move the left pointer to mid + 1
    }
  }

  return left; // Return the final value of left
}
```

## Explanation:
condition function: This is where you implement the specific logic for the problem you're solving.
### Binary Search Logic:

The while loop runs as long as left < right, continually narrowing the search space.
The middle index is calculated using Math.floor(left + (right - left) / 2) to avoid overflow.
Depending on the result of the condition(mid), the search space is either reduced from the right (right = mid) or from the left (left = mid + 1).

### Adjustments:
Replace search_space with the actual array or range you want to search in.
The condition function needs to be implemented based on the specific problem you are solving.
### Problems 
https://leetcode.com/discuss/study-guide/786126/Python-Powerful-Ultimate-Binary-Search-Template.-Solved-many-problems
