const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// GET
router.get("/", blogController.getBlogs);

// POST

// PUT

// DELETE

module.exports = router;
