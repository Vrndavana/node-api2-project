const express = require("express");
const server = express();
const port = 5000;

server.use(express.json());
server.listen(5000, () => {
  console.log(`\n *** Server listening on port ${port} *** \n`);
});

