const CustomDebounce = (func, delay) => {
  let timer;
  return () => {
    let self = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(self, args);
    }, delay);
  };
};
let debounce = CustomDebounce(apiCall, 3000);
debounce();
