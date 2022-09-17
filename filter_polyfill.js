Array.prototype.myFilter = function(callback) {
    var res = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            res.push(this[i]);
        }
    }
    return res;
}


const arr = [1,2,3,4,5,6];
const newArr = arr.myFilter(item => item%2==0);
console.log("original Array", arr);
console.log("New Array", newArr);