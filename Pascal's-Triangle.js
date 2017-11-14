/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(!numRows) return []

    let result = [[1]]
    for(let i = 1; i < numRows; i++){
        let preArr = result[i - 1],
            arr = [1]

        for(let j = 1; j <= i; j++){
            let preNum = preArr[j - 1],
                curNum = preArr[j] ? preArr[j] : 0
            arr.push(preNum + curNum)
        }

        result.push(arr)
    }

    return result
};

console.log(generate(5))