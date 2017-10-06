;(function IIFE(){
    
    /* ------Two Sum------ */
    let twoSum = function(nums, target) {
        const result = new Array(2)
        nums.forEach((num, i) => {
            const diff = target - num
            const k = nums.indexOf(diff)
            if(k > -1 && k != i){
                result[0] = k
                result[1] = i
                return
            }
        })
        return result
    };


    let nums = [2, 7, 13, 15],
        target = 9

    console.log(twoSum(nums, target))

})()