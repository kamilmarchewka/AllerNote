const express = require('express');
const allergicController = require('../../controllers/allergicController');

const router = express.Router();

router.get('/', allergicController.getAllAllergic);
router.get('/:id', allergicController.getAllergicById);
router.post('/', allergicController.createAllergic);
router.put('/:id', allergicController.updateAllergic);
router.delete('/:id', allergicController.deleteAllergic);

module.exports = router;
