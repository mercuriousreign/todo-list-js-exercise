// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  // taskTitles.push(title);
  // taskComplete.push(false);
  // taskDescription.push(description);

  const task = {
    title: title,
    description: description,
    complete : false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }


  };

  return task;


}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }



// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "take out all the ...material out of the box"); // task 0
const task2 = newTask("Do Laundry","😥"); // task 1
const tasks = [task1,task2];
console.log(tasks);

task1.logState();
task1.markCompleted();
task1.logState();

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
