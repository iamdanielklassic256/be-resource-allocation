const express = require('express');
const { getConstraints, postResourceContraint } = require('../../controllers/constraintController');
const router = express.Router();



router.get('/all', getConstraints)
router.post('/', postResourceContraint)


module.exports = router;