const Survey = require('../../database/models/Response')

module.exports = async function getResponseById(req, res, next) {
	try {
		const response = await Survey.findById(req.params.response)
		if (response == null) {
            return res.status(404).json({ message: 'Cannot find response'})
		}
        req.response = response
	} catch (err) {
		return res.status(500).json({ message: err.message})
	}
	
	next()
}