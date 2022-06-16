const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// GET
router.get("/", todoController.getTodos);
router.get("/progress", todoController.getProgressTodos);
router.get("/completed", todoController.getCompletedTodos);

// POST
router.post("/", todoController.postTodo);

// PUT
router.put("/", todoController.putTodo);

module.exports = router;
