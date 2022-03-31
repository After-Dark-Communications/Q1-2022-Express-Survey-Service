const mongoose = require("mongoose")
const questionSchema = require("./questionSchema")

module.exports = mongoose.Schema({
    question: {
        type: questionSchema,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})