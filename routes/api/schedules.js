const express = require('express');
const { getResourceScehdules, postResourceScedule } = require('../../controllers/scheduleResourceController');
const router = express.Router();



router.get('/all', getResourceScehdules)
router.post('/create', postResourceScedule)


module.exports = router;