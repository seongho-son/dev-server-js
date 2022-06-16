const todoService = require("../services/todoService");
const errorGenerator = require("../utils/errorGenerator");

async function getTodos(req, res) {
  try {
    console.log("controller getTodoList start");

    const todos = await todoService.getTodos();

    res.status(200).json({ message: "SUCCESS", todos });
  } catch (err) {
    console.log("controller getTodoList err");
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function postTodo(req, res) {
  try {
    console.log("controller postTodo start");

    const { description } = req.body;
    if (!description) {
      return await errorGenerator({ statusCode: 400, message: "KEY_ERROR" });
    }
    await todoService.postTodo(description);

    res.status(200).json({ message: "SUCCESS" });
  } catch (err) {
    console.log("controller postTodo err");
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function putTodo(req, res) {
  try {
    console.log("controller putTodo start");

    const { todo } = req.body;
    if (!todo) {
      return await errorGenerator({ statusCode: 400, message: "KEY_ERROR" });
    }
    await todoService.putTodo(todo);

    res.status(200).json({ message: "SUCCESS" });
  } catch (err) {
    console.log("controller putTodo err");
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function getProgressTodos(req, res) {
  try {
    console.log("controller getProgressTodos start");

    const todos = await todoService.getProgressTodos();

    res.status(200).json({ message: "SUCCESS", todos });
  } catch (err) {
    console.log("controller getProgressTodos err");
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function getCompletedTodos(req, res) {
  try {
    console.log("controller getCompletedTodos start");

    const todos = await todoService.getCompletedTodos();

    res.status(200).json({ message: "SUCCESS", todos });
  } catch (err) {
    console.log("controller getCompletedTodos err");
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = { getTodos, postTodo, putTodo, getProgressTodos, getCompletedTodos };
