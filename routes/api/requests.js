const express = require('express');
const { getRequest, postRequest } = require('../../controllers/requestResourceController');
const router = express.Router();



router.get('/all', getRequest)
router.post('/create', postRequest)


module.exports = router;