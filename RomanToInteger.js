/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let res, tmp = 0
    for(let i = s.length - 1; i >= 0; i--){
        if(!res){
            res = map[s[i]]
            continue
        }
        if(map[s[i]] >= map[s[i + 1]]){
            res += map[s[i]]
        }else{
            res -= map[s[i]]
        }
    }
    return res
};

console.log(romanToInt('IIV'))