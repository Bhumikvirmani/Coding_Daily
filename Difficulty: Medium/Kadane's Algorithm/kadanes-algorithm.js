/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    maxSubarraySum(arr) {
        // Code here
        let maxSoFar = arr[0];     // Initialize with the first element
          let currentSum = arr[0];   // Start the subarray here
        
          for (let i = 1; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]); // Extend or restart
            maxSoFar = Math.max(maxSoFar, currentSum);          // Update global max
          }
        
          return maxSoFar;
    }
}