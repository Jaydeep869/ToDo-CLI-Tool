

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const tasks = require("./todo");

const argv = yargs.argv;

const command = argv._[0];
console.log("Running Command is :", command);

if (command === "addToDo") {
  tasks.addToDo(argv.title);
} else if (command === "deleteToDo") {
  let deletetodo = tasks.deleteToDo(argv.title);
  let message = deletetodo ? "ToDo found and Deleted" : "ToDo not found";
  console.log(message);
} else if (command === "readTodo") {
  let readtodo = tasks.readToDo(argv.title);
  if (readtodo) {
    console.log("ToDo found ");
    console.log(readtodo);
  } else {
    console.log("ToDo not found!");
  }
} else if (command === "listToDo") {
  let alltodo = tasks.listToDo();
  console.log(`${alltodo.length} ToDo found`);
  alltodo.forEach((todo) => tasks.logToDo(todo));
}else{
    console.log("invalid command .")
}
