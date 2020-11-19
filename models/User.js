const mongoose  = require ("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type: String, required: true, minlength: 1},
    password: {type: String, required: true, minlength: 1}
})

const User = mongoose.model('User', userSchema)

module.exports = User