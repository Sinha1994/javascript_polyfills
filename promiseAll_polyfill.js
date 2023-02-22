const getTask = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay == 1000) {
        reject(`Rejected for ${delay}`);
      } else {
        resolve(delay);
      }
    }, delay);
  });

Promise.customAll = function (tasks) {
  let output = [];
  return new Promise((resolve, reject) => {
    tasks.forEach((task, index) => {
      task
        .then((data) => {
          output[index] = data;
          if (index == tasks.length - 1) resolve(output);
        })
        .catch((err) => reject(err));
    });
  });
};

const tasks = [getTask(500), getTask(1000), getTask(1500)];
Promise.customAll(tasks)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
