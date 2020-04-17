// Write the db helper methods for the schemes resrouce in ./schemes/scheme-model.js to practice modular code
const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
 return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

//? GET '/:id/steps'
function findSteps(id) {
  return db
    .select(
      'steps.id', // Expects a scheme `id`
      'schemes.scheme_name', // This array should include the `scheme_name` _not_ the `scheme_id`
      'steps.step_number',
      'steps.instructions',
    )
    .from('steps')
    .join('schemes', 'steps.scheme_id', 'schemes.id')
    .where('steps.scheme_id', id)
    .orderBy('steps.step_number');
}

// POST '/'
function add(schemeData) {
  return db('schemes')
    .insert(schemeData); 
}

//? POST '/:id/steps'
function findById(stepData, id) {
  return db('schemes')
    .where({ id })
    .insert(stepData)
    .then(ids => {
      return findById(id);
    })
}

// PUT 
function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(ids => {
      return findById(id);
    });
}

// delete '/:id'
function remove(id) {
  const scheme = findById(id);
  return db('schemes')
    .where({ id })
    .delete();
}














