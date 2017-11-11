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
var zigzagLevelOrder = function(root) {
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

    if(level % 2){
        result[level].unshift(node.val)
    }else{
        result[level].push(node.val)
    }
}