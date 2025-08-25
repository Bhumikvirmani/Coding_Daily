/**
 * @param {Node} root
 */
/**
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    // Function to return a list of nodes visible from the top view
    // from left to right in Binary Tree.
    topView(root) {
        // code here
        if(!root)return [];
        
        const topNode = new Map();
        
        const queue = [[root, 0]];
        
        let minX = 0, maxX = 0;
        
        while(queue.length){
            let [node, x] = queue.shift();
            
            if(!topNode.has(x)){
                topNode.set(x, node.data);
            }
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            
            if(node.left) queue.push([node.left, x-1]);
            if(node.right) queue.push([node.right , x+1]);
        }
        
        const result = [];
        for(let x = minX; x <=maxX; x++){
            result.push(topNode.get(x));
        }
        return result;
    }
}