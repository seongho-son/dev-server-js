const todoDao = require("../models/todoDao");

async function getTodos() {
  console.log("service getTodos start");

  return await todoDao.getTodos();
}

async function postTodo(description) {
  console.log("service postTodo start");

  return await todoDao.postTodo(description);
}

async function putTodo(todo) {
  console.log("service putTodo start");

  return await todoDao.putTodo(todo);
}

async function getProgressTodos() {
  console.log("service getProgressTodos start");

  return await todoDao.getProgressTodos();
}

async function getCompletedTodos() {
  console.log("service getCompletedTodos start");

  return await todoDao.getCompletedTodos();
}

module.exports = { getTodos, postTodo, putTodo, getProgressTodos, getCompletedTodos };
