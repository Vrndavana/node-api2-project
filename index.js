// Requirements for setting up API Server
const express = require("express");
const server = express();
const port = 5000;

// Create and Import using Router.js
const posts = require('./posts/router');

// Telling express to read Json - Api Listening
server.use(express.json());
server.listen(port, () => {
  console.log(`\n *** Server listening on port ${port} *** \n`);
});

// Server.use = localhost500 on postman = localhost:5000/api/posts
server.use('/api/posts', posts);
