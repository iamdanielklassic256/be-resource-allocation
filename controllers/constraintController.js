const Contraints = require('../models/resourceContraints');
const Resource = require('../models/resourceModel');

// get all the users
const getConstraints = async (req, res) => {
	const constraints = await Contraints.find({}).populate('resource').sort({ createdAt: -1 })
	res.status(200).json(constraints);
}
const postResourceContraint = async (req, res) => {
	try {
		const { resourceId, name, details} = req.body;
		const resource = await Resource.findById(resourceId);

		if (!resource) {
			return res.status(404).json({ message: 'Resource not found' });
		}
		// Create a new book instance
		const constraint = new Contraints({ resource: resourceId, name, details });

		// Save the book to the database
		await constraint.save();

		res.status(201).json({ message: 'Resource constraint added successfully', constraint });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong', error });
	}
}







module.exports = {
	getConstraints,
	postResourceContraint	
}