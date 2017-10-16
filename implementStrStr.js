/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/* var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
}; */

var strStr = function(haystack, needle) {
    let m = haystack.length,
        n = needle.length

    if(m === 0 && m === n){
        return 0
    }
    for(let i = 0, l = m - n + 1; i < l; i++){
        let j = 0
        while(j < n){
            if(haystack[i + j] !== needle[j]){
                break
            }
            j++
        }
        if(j === n){
            return i
        }
    }

    return -1
};

console.log(strStr('a', 'a'))