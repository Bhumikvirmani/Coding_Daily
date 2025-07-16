class Solution {
    // Time complexity - O(n log n) + O(nD);
    jobSequencing(deadline, profit) {
        // code here
        const n = deadline.length;

        // Step 1: Pair jobs with deadline and profit
        const jobs = [];// O(n);
        for (let i = 0; i < n; i++) {
            jobs.push({ id: i, deadline: deadline[i], profit: profit[i] });
        }
    
        // Step 2: Sort jobs by descending profit
        jobs.sort((a, b) => b.profit - a.profit); // O(log n)
        
        
    
        // Step 3: Create a slot array up to max deadline
        const maxDeadline = Math.max(...deadline);
        const parent = Array.from({length : maxDeadline + 1});
        
        for(let i = 1; i <= maxDeadline; i++){
            parent[i] = i;
        }
        // This take too much time and Space Complexity to optimize this we use Disjoint Set Unit (DSU) 
        // const slots = Array(maxDeadline).fill(false); // D of deadlines are differnet different then O(D);
        // const result = []; // worst case O(n);
        // let totalProfit = 0;
        // for (let job of jobs) {// it will iterate through jobs // O(n);
        //     // Try to fit the job in latest possible free slot before its deadline
        //     // why job.deadline - 1 because slot is of size 4 means index 3 thats why to put it into the 
        //     // correct spot we have to -1 ;
        //     for (let d = job.deadline - 1; d >= 0; d--) {//O(d);
        //         if (!slots[d]) { // id the slot is false - !false = true means yes its empty we can put the value to the id 
        //             slots[d] = true;
        //             totalProfit += job.profit;
        //             result.push(job.id); // or store job info
        //             break;
        //         }
        //     }
        // }
        
        // return [result.length, totalProfit];
        
        function find(jobDeadline){
            if(parent[jobDeadline] === jobDeadline) return jobDeadline;
            return parent[jobDeadline] = find(parent[jobDeadline]);
        }
        
        function union(availableSpot, value){
            parent[availableSpot] = value;
        }
        
        let count = 0;
        let totalProfit = 0;
        
        for(const job of jobs){
            let availableSpot = find(job.deadline);
            if(availableSpot > 0){
                union(availableSpot, availableSpot-1);
                count++;
                totalProfit += job.profit;
            }
        }
        return [count,totalProfit];

    }
}