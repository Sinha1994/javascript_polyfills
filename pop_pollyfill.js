Array.prototype.myPop = function() {
    let popped = this[this.length-1];
    this.length -= 1;
    return popped;
}

const arr = [10, 21, 30, 42, 50];
console.log(arr.myPop());
console.log(arr);