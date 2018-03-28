const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

//function that sets requirement conditions for a new email being added to the database
function userDataEmailValidator(userEmail) {
    const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRE.test(String(userEmail).toLowerCase())
}

//"String" must be capital
const userDataSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: [true,'Please enter an email address'],
        unique: true,
        uniqueCaseInsensitive: true,
        maxlength: [35,'Email address must be less than 35 characters'],
        validate: [userDataEmailValidator, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'please enter a password'],
        minlength: [8,'Your password must have a minimum of 8 characters'],
        maxlength: [25,'Passwords must be less than 25 characters'],
    }
}, {collection: 'userData'})
userDataSchema.plugin(uniqueValidator, { message: 'This email address has been taken, please try another.'})

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