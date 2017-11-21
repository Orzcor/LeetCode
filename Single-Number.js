/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let i = 1,
        len = nums.length
    while(i < len){
        let index = nums.indexOf(nums[i])
        if(index < i && index !== -1){
            nums[i] = nums[i + 1]
            len--
        }else{
            i++
        }
    }

    return i
};