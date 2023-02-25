const getTask = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay < 1000) reject(`Rejected after ${delay}`);
      resolve(delay);
    }, delay);
  });

const taskArray = [getTask(500), getTask(2000), getTask(600), getTask(700)];

Promise.myPromiseAny = (tasks) => {
  let errorsArr = [];
  return new Promise((resolve, reject) => {
    tasks.forEach((task) => {
      task
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          errorsArr.push(err);
          if (errorsArr.length == tasks.length) reject(errorsArr);
        });
    });
  });
};

Promise.myPromiseAny(taskArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
