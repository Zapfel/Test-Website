const AuthenticationController = require('./controllers/AuthenticationController')

//refer to controllers for references
module.exports = (app) => {

    //after register normally there would be (req, res) since register takes these two arguments we can just replace
    // it, to be more syntaxically pleasing
    app.post('/register', AuthenticationController.register)

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
