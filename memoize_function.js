const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2, num3) => num1 * num2 * num3;

const generateUniqueKey = (fn, ...args) => {
  return [].concat(fn.name, ...args).join("_");
};

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let key = generateUniqueKey(fn, args);
    if (cache[key]) {
      console.log("inside cache", cache);
      return cache[key];
    } else {
      cache[key] = fn(...args);
      console.log("outside cache", cache[key]);
      return cache[key];
    }
  };
};

let memoizeAdd = memoize(add);
console.log(memoizeAdd(10, 20));
console.log(memoizeAdd(10, 20));

let memoizeMultiply = memoize(multiply);
console.log(memoizeMultiply(2, 4, 6));
console.log(memoizeMultiply(2, 4, 6));
