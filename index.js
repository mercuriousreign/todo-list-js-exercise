
function newTask(title, description) {
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

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "take out all the ...material out of the box"); 
const task2 = newTask("Do Laundry","😥"); 
const tasks = [task1,task2];
console.log(tasks);

task1.logState();
task1.markCompleted();
task1.logState();
