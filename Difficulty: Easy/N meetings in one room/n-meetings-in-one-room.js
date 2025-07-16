// User function Template for javascript

/**
 * @param {number[]} start
 * @param {number[]} end
 * @returns {number}
 */

class Solution {
    // Function to find the maximum number of meetings that can
    // be performed in a meeting room.
    maxMeetings(start, end) {
        // Method 1 : make the meetings pair by starting[i], ending[i] and then sort it according to 
        // the value ending time below is the Reason why I sort the values by ending time 
        // then compare the starting with the previous value of ending to get the valid pairs.
        
        // Why we sort by ending time: 
        // We sort by meeting end time because we want to free up the room as early as possible,
        // increasing the chance of accommodating more meetings later.
        // It's a classic greedy principle: choose the earliest finish to leave room for others
        
        //When to Use This Approach
        
        // This greedy method works for any problem where:
        // - You need to schedule non-overlapping intervals
        // - Only one resource is available at a time (e.g., one meeting room)
        // - You're trying to maximize the number of tasks/events
        // Common scenarios:
        
        // - Meeting room booking
        // - CPU task scheduling
        // - Job interviews in fixed slot
        
        // code here
        // Step 1: Create an array to hold meeting objects
        // Each object has a start and end time
        let meetings = [];
        for (let i = 0; i < start.length; i++) {
            meetings.push({ start: start[i], end: end[i] });
        }
    
        // Step 2: Sort meetings by end time (greedy strategy)
        // We want meetings that finish earliest to maximize available slots
        meetings.sort((a, b) => a.end - b.end);
    
        // Step 3: Initialize count and previous meeting's end time
        let count = 0;
        let prevEnd = -1;
    
        // Step 4: Iterate over the sorted meetings
        // let i = 0;
        for(let i = 0; i < meetings.length; i++) {
            // If current meeting starts after previous one ends, it's valid
            if (meetings[i].start > prevEnd) {
                count++; // We include this meeting
                prevEnd = meetings[i].end; // Update the end time for comparison
                // i++; // Move to the next meeting
            }
            
        }
    
        // Step 5: Return count of non-overlapping meetings
        return count;

    }
}