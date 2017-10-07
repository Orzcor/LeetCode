/**
 * @param {number} x 
 * @return {number}
 * @description Example1: x = 123, return 321   
                Example2: x = -123, return -321
 */
var reverse = function(x) {
    var res = 0;
    while(x){
        res = res * 10 + x % 10;
        x = parseInt(x / 10);
    }
    if(res > Math.pow(2, 31) || res < -Math.pow(2, 31)){
       res = 0;
    }
    return res;
};

console.log(reverse(-2147483648))