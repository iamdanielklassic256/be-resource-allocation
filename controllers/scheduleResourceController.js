const Schedules = require('../models/resourceScheduleModel');
const Resource = require('../models/resourceModel');
const Client = require('../models/clientModel');

// get all the users
const getResourceScehdules = async (req, res) => {
	const schedules = await Schedules.find({}).populate('resource').sort({ createdAt: -1 })
	res.status(200).json(schedules);
}
const postResourceScedule = async (req, res) => {
	try {
		const { resourceId, startTime, endTime, date, status, purpose, userId } = req.body;
		const resource = await Resource.findById(resourceId);

		if (!resource) {
			return res.status(404).json({ message: 'Resource not found' });
		}
		const reservedBy = await Client.findById(userId);

		if (!reservedBy) {
			return res.status(404).json({ message: 'User not found' });
		}
		// Create a new book instance
		const schedule = new Schedules({ resource: resourceId, startTime, endTime, date, status, purpose, reservedBy: userId });

		// Save the book to the database
		await schedule.save();

		res.status(201).json({ message: 'Resource scheduled successfully', schedule });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong', error });
	}
}







module.exports = {
	getResourceScehdules,
	postResourceScedule

}