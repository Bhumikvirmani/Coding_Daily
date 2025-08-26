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
        if (!root) return [];
    
        const bottomNode = new Map();
        const queue = [];
        let head = 0;
    
        queue.push([root, 0]);
    
        let minX = 0, maxX = 0;
    
        while (head < queue.length) {
            const current = queue[head++];
            if (!current) continue;
    
            const [node, x] = current;
    
            bottomNode.set(x, node.data); // Always overwrite for bottom view
    
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
    
            if (node.left) queue.push([node.left, x - 1]);
            if (node.right) queue.push([node.right, x + 1]);
        }
    
        const result = [];
        for (let x = minX; x <= maxX; x++) {
            result.push(bottomNode.get(x));
        }
    
        return result;

    }
}