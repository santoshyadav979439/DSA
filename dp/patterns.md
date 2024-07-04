1. Minimum (Maximum) Path to Reach a Target

   ```
   for (int i = 2; i <= n; ++i) {
   dp[i] = min(dp[i-1], dp[i-2]) + (i == n ? 0 : cost[i]);
}
 
return dp[n]

   ```
- https://leetcode.com/problems/min-cost-climbing-stairs/description/
- https://leetcode.com/problems/minimum-path-sum/description/
2.  knapsack pattern
  #### Bounded

#### Unbounded

