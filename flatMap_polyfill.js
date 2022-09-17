Array.prototype.myFlatMap = function(callback) {
    let res = [];
    for(let i=0;i<this.length;i++){
        let mapRes = callback(this[i], i, this);
        if(Array.isArray(mapRes)){
            for(let j=0;j<mapRes.length;j++){
                res.push(mapRes[j]);
            }
        } else {
          res.push(mapRes);
        }
    }
    return res;
}

const arr = [1,2,3,4];
console.log(arr.myFlatMap(x => [x, x * 3]));
console.log(arr.myFlatMap(x => x*2));
