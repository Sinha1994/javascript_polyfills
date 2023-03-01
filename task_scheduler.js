const schedules = [
  { id: "a", dependencies: ["b", "c"] },
  { id: "b", dependencies: ["d"] },
  { id: "c", dependencies: ["e"] },
  { id: "d", dependencies: [] },
  { id: "e", dependencies: ["f", "a"] },
  { id: "f", dependencies: [] },
];

const finishTask = (schedules) => {
  let curr = 0,
    completedCount = 0;
  while (
    (!schedules[curr].visited || schedules[curr].visited < schedules.length) &&
    completedCount < schedules.length
  ) {
    let task = schedules[curr];
    if (task.dependencies.length == 0 && !task.completed) {
      task.completed = true;
      ++completedCount;
      console.log(`${task.id} completed`);
      schedules.forEach((element) => {
        let index = element.dependencies.indexOf(task.id);
        if (index >= 0) {
          element.dependencies.splice(index, 1);
        }
      });
    } else if (task.dependencies.length) {
      task.completed = false;
      task.visited = task.visited ? task.visited + 1 : 1;
    }
    curr = (curr + 1) % schedules.length;
  }
  if (schedules[curr].visited >= schedules.length) {
    console.log("cycle detected");
  } else {
    console.log("task completed");
  }
};

finishTask(schedules);
