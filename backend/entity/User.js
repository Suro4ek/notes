const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const User = mongoose.model('User', userSchema);
module.exports = User;