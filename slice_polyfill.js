Array.prototype.mySlice = function(start, end) {
    let res = [];
    if(start != null && end != null){
      for(let i=start;i<end;i++){
          res.push(this[i]);
      }
    } else if(start != null && end == null) {
        for(let i=start; i<this.length;i++){
          res.push(this[i]);
      }
    } else {
        for(let i=0; i<this.length;i++){
          res.push(this[i]);
      }
    }
    return res;
}


const arr = [1,2,3,4,5,6,7];
console.log(arr.mySlice());
console.log(arr.mySlice(2));
console.log(arr.mySlice(3,6));