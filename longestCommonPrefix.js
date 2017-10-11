/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0)
        return ''
    let prefix = strs[0]

    for(let i = 1, l = strs.length; i < l; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length - 1)
            if(prefix === '')
                return ''
        }
    }
    return prefix
};

console.log(longestCommonPrefix(['abc', 'abcxx', 'abccc', 'abcety']))