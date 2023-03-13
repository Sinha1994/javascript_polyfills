const customThrottle = (callback, time) => {
  let throttlePause = false;
  return () => {
    if (throttlePause) return;
    throttlePause = true;
    let context = this;
    let args = arguments;
    setTimeout(() => {
      callback.apply(context, args);
      throttlePause = false;
    }, time);
  };
};
let throttle = customThrottle(apiCall, 3000);
throttle();
