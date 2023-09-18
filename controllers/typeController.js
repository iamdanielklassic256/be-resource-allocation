const ResourceType = require('../models/resourceTypes')




const getResourceType = async (req, res) => {
	const resourceTypes = await ResourceType.find({}).sort({ createdAt: -1 })
	res.status(200).json(resourceTypes);
}

const CreateResourceType = async (req, res) => {
	try {
		const { name } = req.body;

		// Check if the book category already exists
		const existingType = await ResourceType.findOne({ name });
		if (existingType) {
			return res.status(409).json({ message: 'Type already exists' });
		}
		// Create a new category instance
		const resourceType = new ResourceType({ name });
		// Save the book category to the database
		await resourceType.save();
		res.status(201).json({ message: 'Resource type created successfully', resourceType });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong', error });
	}
}

module.exports = {
	getResourceType,
	CreateResourceType
}