/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = []
    levelRecursion(root, result, 0)
    return result
};

var levelRecursion = function(node, result, level) {
    if(node === null) return ;
    if(result.length < level + 1){
        result.push([])
    }

    levelRecursion(node.left, result, level + 1)
    levelRecursion(node.right, result, level + 1)

    result[level].push(node.val)
};