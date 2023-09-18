const express = require('express');
const { getResources, postResource,  } = require('../../controllers/resourceController');
const router = express.Router();



router.get('/all', getResources)
router.post('/create', postResource)


module.exports = router;