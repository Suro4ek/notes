const mongoose = require('mongoose');
const { Schema } = mongoose;
const noteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})
const Note =  mongoose.model('Note', noteSchema);
module.exports = Note;