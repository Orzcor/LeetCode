/**
 * @param {string[]} strs
 * @return {string}
 */
/* var longestCommonPrefix = function(strs) {
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
}; */

var longestCommonPrefix = function(strs) {
    if(strs.length === 0)
        return ''

    for(let i = 0, l = strs[0].length; i < l; i++){
        let c = strs[0].charAt(i)
        for(let j = 1, len = strs.length; j < len; j++){
            if(i === strs[j].length || strs[j].charAt(i) !== c)
                return strs[0].substring(0, i)
        }
    }
    return strs[0]
};

console.log(longestCommonPrefix(['abc', 'abcxx', 'abccc', 'abcety']))