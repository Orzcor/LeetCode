/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let one = 0,
        two = 0,
        three = 0

    for(let i = 0, l = nums.length; i < l; i++){
        two |= one & nums[i]
        one ^= nums[i]
        three = one & two
        
        one &= ~three
        two &= ~three
    }

    return one
};