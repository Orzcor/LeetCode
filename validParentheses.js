/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length < 2)
        return false

    let stack = []
    for(let i = 0, l = s.length; i < l; i++){
        let c = s[i]

        if(c === '(' || c === '{' || c === '['){
            stack.push(c)
        }else{
            if(stack.length === 0)
                return false
            
            switch(c){
                case ')':
                    if(stack.pop() !== '(') return false
                    break
                case '}':
                    if(stack.pop() !== '{') return false
                    break
                case ']':
                    if(stack.pop() !== '[') return false
                    break
            }
        }
    }
    return stack.length === 0
};

console.log(isValid(''))