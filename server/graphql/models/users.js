const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, require: true },
  token: { type: String }
})


module.exports = mongoose.model('Users', UsersSchema)