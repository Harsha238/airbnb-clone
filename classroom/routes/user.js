const express = require("express");
const router = express.Router();

// INDEX - GET all users
router.get("/", (req, res) => {
    res.send("GET for users");
});

// SHOW - GET single user
router.get("/:id", (req, res) => {
    res.send("GET for user id");
});

// CREATE - POST new user
router.post("/", (req, res) => {
    res.send("POST for users");
});

// DELETE - DELETE user
router.delete("/:id", (req, res) => {
    res.send("DELETE for user id");
});

module.exports = router;