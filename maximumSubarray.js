/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length
    if(len === 0) return 0
    let maxSum = nums[0],
        curSum = nums[0]
    
    for(let i = 1; i < len; i++){
        curSum = Math.max(curSum + nums[i], nums[i])
        maxSum = Math.max(maxSum, curSum)
    }
    return maxSum
};