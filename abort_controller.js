const url = "https://jsonplaceholder.typicode.com/users";
const fetchUsers = async () => {
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort();
  }, 500);
  const response = await fetch(url, { signal: controller.signal });
  if (response.ok) return response.json();
  throw new Error("Something went wrong!!!");
};

const getUsers = async () => {
  try {
    const users = await fetchUsers();
    console.log(users[0].company);
  } catch (err) {
    console.log(`Error message inside getUsers ${err.message}`);
  }
};

getUsers();
