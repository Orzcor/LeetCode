/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let result = ''

    while(n > 0){
        n--
        code = String.fromCharCode(n % 26 + 65)
        n = Math.floor(n / 26)
        result = code + result
    }

    return result
};

console.log(convertToTitle(52))