Array.prototype.myMap = function(callback) {
    let res = [];
    for(let i=0;i<this.length;i++){
      res.push(callback(this[i],i,this));
    }
    return res;
}

const arr = [1,2,3,4,5];
const newArr = arr.myMap(item => item*5);
console.log("original Array", arr);
console.log("New Array", newArr);
