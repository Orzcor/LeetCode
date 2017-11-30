/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let result = 0

    for(let i = 0, l = s.length; i < l; i++){
        let cur = s.charCodeAt(i) - 64
        result = result * 26 + cur
    }

    return result
};