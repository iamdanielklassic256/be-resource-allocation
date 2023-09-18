const User = require('../models/UserModel');
const Client = require('../models/clientModel')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// get all the users
const getAllClients = async (req, res) => {
	const clients = await Client.find({}).sort({ createdAt: -1 })
	res.status(200).json(clients);
}


const getAllUsers = async (req, res) => {
	const users = await User.find({}).sort({ createdAt: -1 })
	res.status(200).json(users);
}
// get a single user by id
const getUserById = async (req, res) => {
	const { userId } = req.params;

	try {
		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		res.status(200).json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

const createUser = async (req, res) => {
	try {
		const { firstName, lastName, username, email, contactInformation, } = req.body;

		// Check if the book category already exists
		const existingUser = await Client.findOne({ email });
		if (existingUser) {
			return res.status(409).json({ message: 'User already exists' });
		}
		// Create a new category instance
		const user = new Client({ firstName, lastName, username, email, contactInformation, });
		// Save the book category to the database
		await user.save();
		res.status(201).json({ message: 'User created successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong', error });
	}
}







module.exports = {
	getAllUsers,
	getUserById,
	createUser,
	getAllClients

}