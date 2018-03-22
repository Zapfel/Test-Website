const config = require('./config')
const mongoose = require('mongoose')
mongoose.connect(config.db.connection)
userData = require('./models/User')

//currently this directory exists as an example
module.exports = (app) => {
//refer to AuthenticationService.js in client folder
//this is the express endpoint it discusses
//we can see below the ${req.body.email} in the message below calls
//the email referenced in the AuthenticationService.js file
//when adding a statement like this use '`' instead of single quotes
    app.post('/register', (req,res) => {
        const user = req.body
        userData.addUser(user, function(err, user) {
            if(err){
                throw err
            }
            res.json(user)
        })

        res.send({
            message: `Hello you've been Registered!!!`
        })
    })

// request types
// get post put patch delete
// below is a get request to a status endpoint located at:
// localhost:port/status
    app.get('/status', (req, res) => {
        res.send({
            message: 'hello world!'
        })
    })

}
