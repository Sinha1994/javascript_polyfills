const PromiseRetry = (asyncFn, retries, delay, finalError) => {
  return new Promise((resolve, reject) => {
    const fetchWithRetry = function () {
      asyncFn(retries)
        .then((data) => resolve(data))
        .catch((err) => {
          if (retries > 0) {
            setTimeout(() => {
              console.log(`Retrying the request...${retries}`);
              --retries;
              fetchWithRetry();
            }, delay);
          } else {
            reject(`${finalError} ${err}`);
          }
        });
    };
    fetchWithRetry();
  });
};

const fethcUser = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 1) {
      reject("Promise Rejected");
    } else {
      resolve(fetch("https://jsonplaceholder.typicode.com/todos/1"));
    }
  });
};

const errorMsg = "Request Failed with error";

const getUsers = () => {
  PromiseRetry(fethcUser, 3, 500, errorMsg)
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

getUsers();
