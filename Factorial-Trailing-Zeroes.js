/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let ret = 0;
    for(let i = 1; i <= n; i++){
        let j = i;
        while(j % 5 == 0){
            ret++;
            j /= 5;
        }
    }
    return ret;
};

console.log(trailingZeroes(1808548329))