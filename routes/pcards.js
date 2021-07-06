const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/pcards', ctrl.pcards.allPcards);
router.get('/:pcardId', ctrl.pcards.pcardsId);

module.exports = router;

