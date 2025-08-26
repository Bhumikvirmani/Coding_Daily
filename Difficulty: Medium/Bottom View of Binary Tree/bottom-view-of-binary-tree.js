/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    // Function to return a list containing the bottom view of the given tree.
    bottomView(root) {
            // If tree is empty, nothing to view from the bottom
        if (!root) return [];
    
        // Map to store the bottom-most node seen at each horizontal distance (x-axis)
        const bottomNode = new Map();
    
        // Queue for BFS: each item is [node, x] where x is the horizontal distance from root
        // Using index tracking to avoid O(n) cost of shift()
        const queue = [[root, 0]];
        let head = 0;
    
        // Track the minimum and maximum horizontal distances encountered
        let minX = 0, maxX = 0;
    
        // BFS traversal
        while (head < queue.length) {
            // Take the next node and its horizontal distance
            const [node, x] = queue[head++];
    
            // For bottom view, we ALWAYS overwrite the value for this horizontal distance
            // This way, the last (lowest) node at this x will remain in the map
            bottomNode.set(x, node.data);
    
            // Update boundaries for later ordered output
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
    
            // If left child exists, it’s one step left (x - 1)
            if (node.left) queue.push([node.left, x - 1]);
    
            // If right child exists, it’s one step right (x + 1)
            if (node.right) queue.push([node.right, x + 1]);
        }
    
        // Build the result array from leftmost x to rightmost x
        const result = [];
        for (let x = minX; x <= maxX; x++) {
            result.push(bottomNode.get(x));
        }
    
        return result;
    }
}