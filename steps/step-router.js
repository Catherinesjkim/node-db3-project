// const express = require('express');

// const Steps = require('./step-model.js');

// const router = express.Router();

// router.get('/', (req, res) => {
//   Steps
//     .find()
//     .then(steps => {
//       res.status(200).json(steps);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to get steps' });
//     });
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   Steps.findById(id)
//     .then(step => {
//       if (step) {
//         res.status(200).json(step);
//       } else {
//         res.status(404).json({ message: 'Could not find step with given id.' })
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to get steps' });
//     });
// });

// router.get('/:id/schemes', (req, res) => {
//   const { id } = req.params;

//   Steps.findSchemes(id)
//     .then(schemes => {
//       if (schemes.length) {
//         res.status(200).json(schemes);
//       } else {
//         res.status(404).json({ message: 'Could not find schemes for given step' })
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to get schmes' });
//     });
// });

// router.post('/', (req, res) => {
//   const stepData = req.body;

//   Steps.add(stepData)
//     .then(step => {
//       res.status(201).json(step);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to create new step' });
//     });
// });

// router.post('/:id/schemes', (req, res) => {
//   const schemeData = req.body;
//   const { id } = req.params;

//   Steps.findById(id)
//     .then(step => {
//       if (step) {
//         Steps.addScheme(schemeData, id)
//           .then(scheme => {
//             res.status(201).json(scheme);
//           })
//       } else {
//         res.status(404).json({ message: 'Could not find step with given id.' })
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to create new scheme' });
//     });
// });

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   Steps.findById(id)
//     .then(step => {
//       if (step) {
//         Steps.update(changes, id)
//           .then(updatedStep => {
//             res.status(200).json(updatedStep);
//           });
//       } else {
//         res.status(404).json({ message: 'Could not find step with given id' });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to update step' });
//     });
// });

// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   Steps.remove(id)
//     .then(deleted => {
//       if (deleted) {
//         res.status(200).json({ removed: deleted });
//       } else {
//         res.status(404).json({ message: 'Could not find step with given id' });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to delete step' });
//     });
// });

// module.exports = router;