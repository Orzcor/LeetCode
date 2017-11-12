/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root === null) return true

    let left = depth(root.left),
        right = depth(root.right)

    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

var depth = function(node) {
    if(node === null) return 0
    return Math.max(depth(node.left), depth(node.right)) + 1
};