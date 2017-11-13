/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0
    return depth(root)
};

var depth = function(node) {
    if(node === null) return 0

    return Math.min(depth(node.left), depth(node.right)) + 1
}