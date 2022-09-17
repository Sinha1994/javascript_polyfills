Array.prototype.myUnshift = function() {
    let oldLen = this.length;
    this.length += arguments.length;
    for(let i=0;i<oldLen;i++){
      this[this.length-i-1] = this[oldLen-i-1];
    }
    for(let i=0;i<arguments.length;i++){
        this[i] = arguments[i];
    }
    return this.length;
}

const arr = [1,2,3];
console.log(arr.myUnshift(4,5));
console.log(arr);