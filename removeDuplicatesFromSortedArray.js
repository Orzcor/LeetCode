/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0

    let i = 0
    for(let j = 1, l = nums.length; j < l; j++){
        if(nums[j] !== nums[i]){
            i++
            nums[i] = nums[j]
        }
    }
    return nums.length = ++i
};