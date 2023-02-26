const getTask = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay < 1000) reject(`Rejected after ${delay}`);
      resolve(delay);
    }, delay);
  });

const taskArray = [getTask(2500), getTask(2000), getTask(600), getTask(700)];

Promise.myAllSettled = (tasks) => {
  let result = [];
  return new Promise((resolve) => {
    tasks.forEach((task) => {
      task
        .then((data) => {
          result.push(data);
          if (result.length == tasks.length) resolve(result);
        })
        .catch((err) => {
          result.push(err);
          if (result.length == tasks.length) resolve(result);
        });
    });
  });
};

Promise.myAllSettled(taskArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
