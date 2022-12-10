//memoize for factorial computation
let cache = {};
const factorial = (num, cache) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  if (cache[num]) {
    console.log("Inside cache");
    return cache[num];
  }
  return (cache[num] = num * factorial(num - 1, cache));
};

console.log(factorial(5, cache));
console.log(factorial(5, cache));
