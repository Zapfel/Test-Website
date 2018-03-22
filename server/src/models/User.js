const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userDataSchema = new Schema({
    email: String,
    password: String
}, {collection: 'userData'})

const userData = mongoose.model('userData', userDataSchema)

module.exports = userData

//get userData
//callback is what to find, limit is # of times it can be performed
module.exports.getData = function(callback, limit) {
    userData.find(callback).limit(limit)
}

//get user
//finds an individual user, example not implemented in routes
module.exports.getUserById = function(id, callback) {
    userData.find(id, callback)
}

//add user
module.exports.addUser = function(User, callback) {
    userData.create(User, callback)
}