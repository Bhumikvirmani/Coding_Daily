// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number[]} dep
 * @returns {number}
 */
//Please Notes My Approch : 
// Question : How its different from N meetings in one room? and why the same  solution don't work here as seems both question
//same .?

// Ans : Both problems involve scheduling events so they don’t conflict, but the key difference lies in what you're optimizing and how overlapping is treated.

// Let’s break it down:

//  Core Difference
// - Problem | What You're Solving | Type of Overlap | Optimization Goal | 
// - N Meetings in One Room | Pick maximum number of non-overlapping meetings | If a meeting overlaps with another, discard it | Select optimal subset | 
// - Minimum Platforms Required | Find maximum number of overlapping trains at any moment | Every train must be accommodated, even if it overlaps | Track total resource need | 

//  you're trying to maximize its usage. That means:
// - You can afford to reject meetings that overlap.
// - Your goal is to find the best possible schedule using that one resource.
// But in the Minimum Platforms Required problem, the challenge flips:
// - You must accommodate all trains—none can be left waiting.
// - So you're calculating how many resources (platforms) are needed to handle all those overlaps in real time.

// Why Same Solution Doesn’t Apply Directly
// Meetings:
// - You can ignore overlapping meetings.
// - You use greedy selection: sort by end time, pick the earliest finishing meeting.
// - Goal: maximize usage of a single room.
//  Minimum Platforms:
// - You must count every overlapping train.
// - You use event tracking: sort arr and dep, simulate arrivals/departures chronologically.
// - Goal: minimize resources to accommodate all trains, no exclusions.

// Analogy to Visualize
// Imagine a theater:
// - N Meetings: You're picking shows that don’t overlap on a single stage.
// - Minimum Platforms: You need multiple screens when multiple movies play at the same time—and you need to know how many screens max you’ll need.

//  Summary
// Even though the inputs look similar (start[], end[] vs. arr[], dep[]), the intent behind each question is opposite:
// - One is selection-centric → pick optimal subset.
// - One is conflict-centric → measure worst-case overlap.


class Solution {
    // Function to find the minimum number of platforms required at the
    // railway station such that no train waits.
    findPlatform(arr, dep) {
        let n = arr.length;
        // Step 1: Sort both arrays
        arr.sort((a, b) => a - b);
        dep.sort((a, b) => a - b);
        
        // Step 2: Use two pointers to simulate arrivals and departures
        let platformNeeded = 1;
        let maxPlatforms = 1;
        
        let i = 1; // next train to arrive
        let j = 0; // earliest departing train
        
        while (i < n && j < n) {
            // Train arrives before the earliest departure → need extra platform
            if (arr[i] <= dep[j]) {
                platformNeeded++;
                i++;
            } else {
                // A train has departed → free up a platform
                platformNeeded--;
                j++;
            }
        
            // Track the maximum platforms needed so far
            maxPlatforms = Math.max(maxPlatforms, platformNeeded);
        }
        
        return maxPlatforms;
    }
}