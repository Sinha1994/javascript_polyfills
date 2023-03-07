//curry with infinite length arguments
const sum = (...args) => {
  if (args.length == 0) return 0;
  return (...arg) => {
    if (arg.length > 0) {
      args = args.concat(arg);
      return sum(...args);
    } else {
      return args.reduce((acc, curr) => curr + acc, 0);
    }
  };
};

console.log(sum(1, 2, 3, 4, 5)());
console.log(sum(1, 2, 3, 4)(5)());
console.log(sum(1, 2, 3)(4)(5)());
console.log(sum(1, 2)(3)(4)(5)());
console.log(sum(1)(2)(3)(4)(5)());
