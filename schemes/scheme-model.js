// Write the db helper methods for the schemes resrouce in ./schemes/scheme-model.js to practice modular code
const db = require("../data/db-config.js");

module.exports = {
  find, 
  findById, 
  // findSteps, 
  // add,
  // remove
}

function find() {
 return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}
