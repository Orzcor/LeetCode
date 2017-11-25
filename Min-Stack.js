/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = 0
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.stack.length === 0){
        this.stack.push(x)
        this.min = x
    }else{
        this.stack.push(x - this.min)
        if(x < this.min)
            this.min = x
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let num = this.stack.pop()

    if(num < 0) this.min = this.min - num
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let len = this.stack.length
    if(len === 1) return this.min

    let num = this.stack[len - 1]
    if(num >= 0){
        return num + this.min
    }else{
        return this.min
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */