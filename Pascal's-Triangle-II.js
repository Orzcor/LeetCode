/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [1]
    for(let i = 1; i < rowIndex + 1; i++){
        for(let j = i; j >= 1; j--){
            if(!result[j]){
                result[j] = 0
            }
            result[j] += result[j - 1]
        }
    }
    return result
};