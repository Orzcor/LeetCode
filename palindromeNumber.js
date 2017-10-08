/**
 * @param {number} x
 * @return {boolean}
 */
/* let isPalindrome = function(x) {
    if(x < 0) return false

    let len = getIntegerLength(x),
        mask = Math.pow(10, len - 1)

    while(x !== 0){
        if(x % 10 !== Math.floor(x / mask))
            return false
        
        x %= mask
        x = Math.floor(x / 10)
        mask /= 100
    }

    return true
};

let getIntegerLength = function(x){
    let len = 0
    while(x !== 0){
        x = Math.floor(x / 10)
        len++
    }
    return len
}; */

let isPalindrome = function(x){
    if(x < 0 || (x % 10 === 0 && x !== 0))
        return false

    let revertedNumber = 0
    while(x > revertedNumber){
        revertedNumber = revertedNumber * 10 + x % 10
        x = Math.floor(x / 10)
    }

    return x === revertedNumber || x === Math.floor(revertedNumber / 10)
};
console.log(isPalindrome(1))