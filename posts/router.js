const express = require("express");
const db = require("../data/db.js");
const router = express.Router();

// Getting Root list
router.get("/", (req, res) => {
  db.find()
    .then((posts) => {res.status(200).json(posts);})
    .catch(() => {res.status(500).json({ error: "Unable to retrieve list of posts" });});
});

// New Posts
router.post("/", (req, res) => {
  const newPost = req.body;
  if (newPost.title === undefined || newPost.contents === undefined) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post.",
    });
    return;
  }
  db.insert(newPost)
    .then(({ id }) => {
      db.findById(id)
        .then((post) => {res.status(201).json(post[0]);})
        .catch(() => {
          res.status(500).json({ error: "Couldn't find new post in database" });});
    })
    .catch(() => {res.status(500).json({
        error: "There was an error while saving the post to the database",
      });
    });
});

module.exports = router;