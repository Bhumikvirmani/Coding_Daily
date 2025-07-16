class Solution {
    fractionalknapsack(val, wt, capacity) {
        // code here
        const n = val.length;
        
        const items = [];
        
        for(let i = 0; i < n; i++){
            items.push({
                val:val[i],
                wt: wt[i],
                ratio: val[i]/wt[i]
            });
        }
        
        items.sort((a,b)=> b.ratio - a.ratio);
        
        let totalValue = 0.0;
        
        for(let item of items){
            if(capacity >= item.wt){
                capacity -= item.wt;
                totalValue += item.val;
            }else{
                totalValue += item.ratio * capacity;
                break;
            }
        }
        
        return Number(totalValue.toFixed(6));
    }
}