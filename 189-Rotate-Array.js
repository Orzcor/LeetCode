/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    let count = 0

    for(let start = 0; count < nums.length; start++){
        let cur = start,
            prev = nums[start]

        do{
            let next = (cur + k) % nums.length,
                temp = nums[next]
            
            nums[next] = prev
            prev = temp
            cur = next
            count++
        }while(start !== cur)
    }
};

//原题第三个答案