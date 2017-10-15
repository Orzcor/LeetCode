/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/* var removeElement = function(nums, val) {
    let i = 0
    for(let j = 0, l = nums.length; j < l; j++){
        if(nums[j] !== val){
            nums[i] = nums[j]
            i++ 
        }
    }
    nums.length = i
    return i
}; */


var removeElement = function(nums, val) {
    let i = 0,
        n = nums.length

    while(i < n){
        if(nums[i] === val){
            nums[i] = nums[--n]
        }else{
            i++
        }
    }

    nums.length = i
    return n
};