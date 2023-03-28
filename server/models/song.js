const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        require: true
    },
    album: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    albumImagePath: {
        type: String,
        required: true,
    },
    songPath: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Song', songSchema)