/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let low = 0,
        high = numbers.length - 1

    while(numbers[low] + numbers[high] !== target){
        if(numbers[low] + numbers[high] < target){
            low++
        }else{
            high--
        }
    }

    return [low + 1, high + 1]
};