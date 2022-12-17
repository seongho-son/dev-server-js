const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// GET
router.get("/", blogController.getBlogs);
router.get("/:id", blogController.getBlog);

// POST
router.post("/", blogController.postBlog);

// PUT

// DELETE

module.exports = router;
