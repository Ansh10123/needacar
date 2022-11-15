const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

module.exports = mongoose.model('login_user', userSchema)