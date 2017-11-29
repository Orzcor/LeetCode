/**
 * @param {number[]} nums
 * @return {number}
 */ 
var majorityElement = function(nums) {
    let major = nums[0],
        count = 1

    for(let i = 1, l = nums.length; i < l; i++){
        if(count === 0){
            count++
            major = nums[i]
        }else if(major === nums[i]){
            count++
        }else{
            count--
        }
    }

    return major
};

console.log(majorityElement([1, 5, 2, 5, 3, 5, 0, 5, 6, 6, 5, 5, 5]))