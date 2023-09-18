const Resources = require('../models/resourceModel');
const ResourceType = require('../models/resourceTypes');

// get all the users
const getResources = async (req, res) => {
    const resources = await Resources.find({}).sort({ createdAt: -1 })
    res.status(200).json(resources);
}
const postResource = async(req, res) => {
    try {
		const { resourceName, resourceTypeId, description, location, maximumCapacity } = req.body;	

		const resourceType = await ResourceType.findById(resourceTypeId);

		if (!resourceType) {
			return res.status(404).json({ message: 'Resource Type not found' });
		}

		// Check if the book category already exists
		const existingResource = await Resources.findOne({ resourceName });
		if (existingResource) {
			return res.status(409).json({ message: 'Resource already exists' });
		}
		// Create a new category instance
		const resource = new Resources({ resourceName, resourceType: resourceTypeId, description, location, maximumCapacity });
		// Save the book category to the database
		await resource.save();
		res.status(201).json({ message: 'Resource added successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong', error });
	}
}


  
  

  

module.exports = {
    getResources,
    postResource
    
}