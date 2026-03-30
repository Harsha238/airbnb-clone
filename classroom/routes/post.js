const express = require("express");
const router = express.Router();

// INDEX - GET all posts
router.get("/", (req, res) => {
    res.send("GET for posts");
});

// SHOW - GET single post
router.get("/:id", (req, res) => {
    res.send("GET for post id");
});

// CREATE - POST new post
router.post("/", (req, res) => {
    res.send("POST for posts");
});

// DELETE - DELETE post
router.delete("/:id", (req, res) => {
    res.send("DELETE for post id");
});

module.exports = router;