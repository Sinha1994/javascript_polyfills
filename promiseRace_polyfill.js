const getTask = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay < 1000) reject(`Rejected after ${delay}`);
      resolve(delay);
    }, delay);
  });

const taskArray = [getTask(2500), getTask(1000), getTask(1500), getTask(700)];

Promise.myPromiseRace = (tasks) => {
  return new Promise((resolve, reject) => {
    tasks.forEach((task) => {
      task
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.myPromiseRace(taskArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
