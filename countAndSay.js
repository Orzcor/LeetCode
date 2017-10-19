/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n <= 0)  return ''

    return unitDo(n)
};

let unitDo = (n) => {
    if(n <= 1)
        return '1'

    let pre = unitDo(n - 1),
        result = ''

    let count = 1
    for(let i = 0, len = pre.length; i < len; i++){
        if((i >= len - 1) || pre[i] != pre[i + 1]){
            result += count
            result += pre[i]
            count = 1
        }else{
            count++
        }
    }
    
    return result
};