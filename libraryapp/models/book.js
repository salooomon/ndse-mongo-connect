const {Schema, model} = require('mongoose');

const bookSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    authors: {
        type: String,
        require: true
    },
    favorite: {
        type: String,
        require: true
    },
    fileCover: {
        type: String,
        require: true
    },
    fileName: {
        type: String,
        require: true
    }
})

module.exports = model("Book", bookSchema)