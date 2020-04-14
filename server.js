const express = require('express');
const helmet = require('helmet');
const mw = require("./api/middleware.js");
const logger = mw.logger;

const SchemeRouter = require('./schemes/scheme-router.js');
const StepRouter = require('./steps/step-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(logger);

//? router handler - it handles the endpoints that begins with the below URL - Connection
server.use('/api/schemes', SchemeRouter);
server.use('/api/steps', StepRouter);

server.get('/api', (req, res) => {
  const environment = process.env;
  res.status(200).json({ api: "up", environment });
});

server.get("/", addName, (req, res) => {
  const nameInsert = req.name ? `${req.name}` : "";
  console.log("req.name is:", req.name);

  // will be treated as HTML string - res.send
  res.send(`
  <h2>Catherine's 3rd Node 3 Module DB Project</h2>
  <p>Welcome ${nameInsert} to Catherine's Multi-Table Queries and DB Helpers Project!</p>
  `);
});

// Doing sth similar to what express.js does
function addName(req, res, next) {
  req.name = 'WEBPT11';
  next();
};

// Catch all 404 error message - good ux
server.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "Oops, didn't find what you are looking for" })
  next();
});


module.exports = server;