// Write the db helper methods for the schemes resrouce in ./schemes/scheme-model.js to practice modular code
const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  // findSteps,
  // add,
  update,
  // remove
};

function find() {
 return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(ids => {
      return findById(id);
    });
}

// function findSteps(id) {
//   return db("steps")
//     .where({ id })
//     .addStep(stepData, id)
//     .then(step => {
//       rerturn findById(id);
//     });
// }