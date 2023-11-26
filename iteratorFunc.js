function helper(arr) {
  this.array = arr;
  this.index = 0;
  this.next = function () {
    if (this.index >= this.array.length) return null;
    return this.array[this.index++];
  };
  this.done = function () {
    if (this.index == this.array.length) return "true";
    return "false";
  };
  return this;
}

let iterator = helper([1, 2, "hello"]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.done());
console.log(iterator.next());
console.log(iterator.done());
console.log(iterator.next());
