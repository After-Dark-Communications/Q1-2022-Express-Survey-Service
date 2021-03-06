const mongoose = require("mongoose")
const questionSchema = require('./question.schema')

module.exports = mongoose.Schema({
    name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false
	},
    visibility: {
        type: String,
        required: false,
        default: 'private'
    },
	questions: {
		type: [questionSchema],
        required: true
	},
    responses: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Response'}],
        required: false
    },
    created: {
        type: Date,
        required: true,
        default: Date()
    },
    updated: {
        type: Date,
        required: true,
        default: Date()
    }
})