/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-z0-9+]+/gi, '').toLowerCase()
    
    let min = 0,
        high = str.length - 1

    while(min < high){
        if(str[min++] !== str[high--]){
            return false
        }
    }

    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))