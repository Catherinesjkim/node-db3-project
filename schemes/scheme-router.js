const express = require('express');

const db = require('../data/db-config.js');
const Schemes = require('./scheme-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Schemes.find()
  .then(schemes => {
    res.status(200).json(schemes); // worked on insomnia
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Schemes.findById(id)
    .then(scheme => {
      if (scheme) {
        res.json(scheme); //? worked on insomnia 
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
});

/*
-   `findSteps(id)`:
    -   Expects a scheme `id`.
    -   Resolves to an array of all correctly ordered step for the given scheme: `[ { id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, scheme_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ]`.
    -   This array should include the `scheme_name` _not_ the `scheme_id`.
*/
router.get('/:id/steps', (req, res) => {
  const { id } = req.params;

  Schemes
    .findSteps(id)
    .then(steps => {
      if (steps.length) {
        res.status(200).json(steps); //? Worked on Insomnia
      } else {
        res.status(404).json({ message: 'Could not find steps for given scheme' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get steps' });
    });
});

// CREATE - POST: Add method with insert
router.post('/', (req, res) => {
  const schemeData = req.body;

  Schemes
    .add(schemeData)
    .then(ids => {
      res.status(201).json({ created: ids[0] }); // Worked on insomnia
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new scheme' });
    });
});

// CREATE - no instruction on github repo
// router.post('/:id/steps', (req, res) => {
//   const stepData = req.body;
//   const { id } = req.params; 

//   Schemes
//   .findById(id)
//   .then(scheme => {
//     if (scheme) {
//       Schemes
//         .addStep(stepData, id)
//         .then(step => {
//           res.status(201).json(step); 
//         })
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id.' })
//       }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new step' });
//   });
// });

// UPDATE
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Schemes
    .findById(id)
    .then(scheme => {
      if (scheme) {
        Schemes
          .update(changes, id)
          .then(updatedScheme => {
            res.status(200).json(updatedScheme); //? Worked on insomnia - TEST!
          });
        } else {
          res.status(404).json({ message: 'Could not find scheme with given id' });
        }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update scheme' });
    });
});

// remove method 
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Schemes.remove(id)
  .then(deleted => {
    if (deleted) {
      res.status(200).json({ removed: deleted }); // worked on insomnia?
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete scheme' });
  });
});

module.exports = router;