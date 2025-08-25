/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @returns {number[]}
 */

class Solution {
       // A leaf is a node with NO children.
      // Like a kid with no younger siblings to the left or right.
      isLeaf(node) {
        return !!node && !node.left && !node.right;
      }
    
      // Walk down the LEFT edge of the tree (top to bottom),
      // collecting the nodes we meet — but skip leaves here,
      // because we'll collect ALL leaves later.
      addLeftBoundary(root, ans) {
        // Start from the left child of the root.
        let curr = root.left;
    
        // Keep going while there is a node to visit.
        while (curr) {
          // If this node is not a leaf, remember it.
          // (We skip leaves now so we don't add them twice.)
          if (!this.isLeaf(curr)) ans.push(curr.data);
    
          // Prefer moving left (hug the left wall).
          // If there is no left child, slide to the right child.
          curr = curr.left ? curr.left : curr.right;
        }
      }
    
      // Collect ALL leaves from left to right.
      // This is a simple "visit everything" walk:
      // - If a node is a leaf, save it.
      // - Otherwise, keep exploring its children.
      addLeaves(node, ans) {
        // If there's no node, there's nothing to do.
        if (!node) return;
    
        // If this node is a leaf, grab it and stop going deeper from here.
        if (this.isLeaf(node)) {
          ans.push(node.data);
          return;
        }
    
        // Not a leaf? Then check its left side and right side.
        // We call the same function on children (this is recursion),
        // which is like saying: "do the same leaf-finding job on the smaller trees."
        this.addLeaves(node.left, ans);
        this.addLeaves(node.right, ans);
      }
    
      // Walk down the RIGHT edge of the tree (top to bottom),
      // collecting nodes we meet — but we store them temporarily,
      // because we want to add them in REVERSE at the end
      // (so it looks like we climbed back up on the outside).
      addRightBoundary(root, ans) {
        // Start from the right child of the root.
        let curr = root.right;
    
        // A temporary list to hold the right boundary in top-to-bottom order.
        const tmp = [];
    
        while (curr) {
          // If this node is not a leaf, remember it for later.
          if (!this.isLeaf(curr)) tmp.push(curr.data);
    
          // Prefer moving right (hug the right wall).
          // If there is no right child, slide to the left child.
          curr = curr.right ? curr.right : curr.left;
        }
    
        // Now add them in reverse order to look like we walked back up.
        for (let i = tmp.length - 1; i >= 0; i--) {
          ans.push(tmp[i]);
        }
      }
    
      // The main function that gathers the boundary:
      // 1) Root (if not a leaf)
      // 2) Left boundary (top to bottom, no leaves)
      // 3) All leaves (left to right)
      // 4) Right boundary (bottom to top, no leaves)
      boundaryTraversal(root) {
        const ans = [];
    
        // If the tree is empty, the boundary is empty.
        if (!root) return ans;
    
        // If the root is NOT a leaf, start with it.
        // (If the root IS a leaf, we'll add it in the leaves step.)
        if (!this.isLeaf(root)) ans.push(root.data);
    
        // Add the left boundary, hugging the left side.
        this.addLeftBoundary(root, ans);
    
        // Add all leaves from left to right.
        this.addLeaves(root, ans);
    
        // Add the right boundary, hugging the right side (we reverse it inside).
        this.addRightBoundary(root, ans);
    
        // That's the full "outline" of the tree — like tracing its silhouette.
        return ans;
      }

}