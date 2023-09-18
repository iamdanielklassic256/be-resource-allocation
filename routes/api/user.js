const express = require('express');
const { getAllUsers, getUserById, createUser, getAllClients } = require('../../controllers/usersController');
const router = express.Router();



router.get('/', getAllUsers)	
router.get('/all', getAllClients)	
router.get('/:userId', getUserById);
router.post('/', createUser)


module.exports = router;