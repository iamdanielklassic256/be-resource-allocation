const express = require('express');
const {getResourceType, CreateResourceType,   } = require('../../controllers/typeController');
const router = express.Router();



router.get('/all', getResourceType)
router.post('/create', CreateResourceType)


module.exports = router;