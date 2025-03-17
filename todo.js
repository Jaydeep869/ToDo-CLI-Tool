console.log("todo.js is running");

const fs = require("fs");
const { isArray } = require("lodash");

// Add ToDo
const addToDo = (title) => {
  let todos = fetchTodo();
  let todo = {
    title,
  };
  let duplicateToDo = todos.filter((todo) => todo.title === title);
  if (duplicateToDo.length === 0) {
    todos.push(todo);
    saveTodo(todos);
    console.log(todo)
    return todo;
  }else{
    console.log(todo)
    return todo;
  }
};

// Delete a ToDo
const deleteToDo = (title) => {
  let todos = fetchTodo();
  let filterTodo = todos.filter((todo) => todo.title !== title);
  saveTodo(filterTodo);
  return todos.length != filterTodo.length;
};

// Read a todo item
const readToDo = (title) => {
  let todos = fetchTodo();
  let filteredTodo = todos.filter((todo) => todo.title === title);
  return filteredTodo[0];
};

// List all ToDo
const listToDo = () => {
  return fetchTodo();
};

// Uitility Function

const fetchTodo = () => {
  try {
    let todoString = fs.readFileSync("task.json");
    return JSON.parse(todoString);
  } catch (e) {
    return[];
  }
};

const saveTodo = (todos) => {
  fs.writeFileSync("task.json", JSON.stringify(todos));
};

const logToDo = (todo) => {
  console.log("## -- # --##");
  console.log(`your ToDo title is- ${todo.title}`);
};


// Exporting Function

module.exports={
    addToDo,
    deleteToDo,
    readToDo,
    listToDo,
    logToDo
}