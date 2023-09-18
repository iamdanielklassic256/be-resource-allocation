const Schedules = require('../models/resourceScheduleModel');
const Resource = require('../models/resourceModel');
const Request = require('../models/resourceRequest');
const Client = require('../models/clientModel');

// get all the users
const getRequest = async (req, res) => {
	const requests = await Request
		.find({})
		.populate('resource')
		.populate('requestedBy')
		.sort({ createdAt: -1 })
	res.status(200).json(requests);
}
const postRequest = async (req, res) => {
	try {
		const { resourceId, requestedBy, startTimeRequested, endTimeRequested, dateRequested, status, purpose, } = req.body;
		const resource = await Resource.findById(resourceId);

		if (!resource) {
			return res.status(404).json({ message: 'Resource not found' });
		}
		// Check if the requestedBy client exists
		const client = await Client.findById(requestedBy);

		if (!client) {
			return res.status(404).json({ message: 'Client not found' });
		}

		// Create a new book instance
		const requests = new Request({ resource: resourceId, requestedBy: requestedBy, startTimeRequested, endTimeRequested, dateRequested, status, purpose, });

		// Save the book to the database
		await requests.save();

		res.status(201).json({ message: 'Request added successfully', requests });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong', error });
	}
}







module.exports = {
	getRequest,
	postRequest

}