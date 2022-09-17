Array.prototype.myReduce = function(callback, acc) {
    let i=0;
    if(!acc){
        acc = this[0];
        i = 1;
    }
    for(;i<this.length;i++){
        acc = callback(acc, this[i], i, this);
    }
    return acc;
}
const arr = [1,2,3,4];
const res = arr.myReduce((item,acc) => {
    return item+acc;
},0);
console.log(res);