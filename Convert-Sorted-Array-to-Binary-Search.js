/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) 
        return null

    let head = recursionBST(nums, 0, nums.length - 1)
    return head
};

var recursionBST = function(nums, low, high) {
    if(low > high) return null

    let mid = Math.floor((low + high) / 2)
    let node = new TreeNode(nums[mid])

    node.left = recursionBST(nums, low, mid - 1)
    node.right = recursionBST(nums, mid + 1, high)

    return node
};