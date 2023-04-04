let memoize = function (func) {
  let cache = {};
  let memo = function (...args) {
    let key = JSON.stringify(args);
    if (!(key in cache)) {
      cache[key] = func(...args);
    }
    return cache[key];
  };
  memo.clear = function () {
    console.log("cache cleared");
    cache = {};
  };
  return memo;
};

function square(x) {
  console.log(`computing ${x} * ${x}`);
  return x * x;
}

const memoizedSquare = memoize(square);
memoizedSquare(1); // from computation
memoizedSquare(1); // from cache
memoizedSquare(2); // from computation
memoizedSquare(2); // from cache
memoizedSquare(1); // from computation
memoizedSquare.clear();
memoizedSquare(1); // from computation

function sum(a, b, c, d) {
  console.log(`computing ${a} + ${b} + ${c} + ${d}`);
  return a + b + c + d;
}

const memoizedSum = memoize(sum);

memoizedSum(1, 2, 3, 4); // from computation
memoizedSum(1, 2, 3, 4); // from cache
memoizedSum(2, 1, 3, 4); // from computation

function compare(obj) {
  console.log(`comparing ${obj.a} and ${obj.b}`);
  return obj.a > obj.b;
}

const memoizedCompare = memoize(compare);

memoizedCompare({ a: 1, b: 2 }); // from computation
memoizedCompare({ a: 1, b: 2 }); // from cache
memoizedCompare({ b: 2, a: 1 }); // from cache
memoizedCompare({ b: 3, a: 1 }); // from computation
