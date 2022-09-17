Array.prototype.myForEach = function(callback) {
    for(let i=0;i<this.length;i++){
      callback(this[i], i, this);
    }
}

const arr = [1,2,3,4,5];
let sum = 0;
arr.myForEach((item) => {
  sum += item;
});
console.log("sum : ", sum);