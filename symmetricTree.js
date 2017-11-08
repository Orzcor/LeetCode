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
var isSymmetric = function(root) {
    return isMirror(root, root)
};

var isMirror = function(note1, note2) {
    if(note1 === null && note2 === null) return true
    if(note1 === null || note2 === null) return false

    return (note1.val === note2.val) 
        && isMirror(note1.left, note2.right) 
        && isMirror(note1.right, note2.left)
};