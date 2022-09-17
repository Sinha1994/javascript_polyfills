Array.prototype.myFlat = function(){
    let res = [];
    for(let i=0;i<this.length;i++) {
     if(Array.isArray(this[i])){
        res.push(...this[i].myFlat());
     } else {
         res.push(this[i]);
     }
    }
    return res;
  }
  
  const arr = [1,2,[3,4],[5,[6,7]]];
  log(arr.myFlat());