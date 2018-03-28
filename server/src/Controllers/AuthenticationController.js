//routes point to controllers
userData = require('../models/User')

//refer to AuthenticationService.js in client folder
//this is the express endpoint it discusses
//we can see below the ${req.body.email} in the message below calls
//the email referenced in the AuthenticationService.js file
//when adding a statement like this use '`' instead of single quotes

module.exports = {
    register(req, res) {
        const user = req.body
        userData.addUser(user, function(err, user) {
            if(err){
                if("email" in err["errors"]) {
                    console.log(err["errors"]["email"]["message"])
                    res.status(400).send({
                        error: err["errors"]["email"]["message"]
                    })
                }

                else if("password" in err["errors"]) {
                    console.log(err["errors"]["password"]["message"])
                    res.status(400).send({
                        error: err["errors"]["password"]["message"]
                    })
                }
            }
            else res.json(user)
        }) //end addUser
    }//end register
}//end Module exports
