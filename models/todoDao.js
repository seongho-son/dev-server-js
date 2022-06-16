const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getTodos() {
  console.log("dao getTodos start");

  return await prisma.todos.findMany({
    orderBy: {
      order: "desc",
    },
  });
}

async function postTodo(description) {
  console.log("dao postTodo start");
  const count = await prisma.todos.count();

  return await prisma.todos.create({
    data: {
      order: count + 1,
      description,
    },
  });
}

async function putTodo(todo) {
  console.log("dao putTodo start");

  return await prisma.todos.update({
    where: {
      id: todo.id,
    },
    data: todo,
  });
}

async function getProgressTodos() {
  console.log("dao getProgressTodos start");

  return await prisma.todos.findMany({
    where: {
      isCompleted: false,
    },
    orderBy: {
      order: "desc",
    },
  });
}

async function getCompletedTodos() {
  console.log("dao getCompletedTodos start");

  return await prisma.todos.findMany({
    where: {
      isCompleted: true,
    },
    orderBy: {
      order: "desc",
    },
  });
}

module.exports = { getTodos, postTodo, putTodo, getProgressTodos, getCompletedTodos };
