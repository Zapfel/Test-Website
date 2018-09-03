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
    },//end register

    Login(req, res) {
        try{
            //pulling user data from form
            const {email,password} = req.body

            //querying user data from database
            //the data inside {} is the query
            userData.findOne({email: email}, function(err, user){
                if (err) {
                    res.status(500).send({
                        error: 'an error has occured when attempting to login'
                    })
                }

                else if (!user){
                   res.status(403).send({
                        error: "The login information entered was incorrect"
                    })

                } 
                
                else if (!userData.validPassword(password,user.password)){
                    return res.status(403).send({
                        error: 'The login information entered was incorrect'
                    })
                } 
                
                else {
                    const userJson = user.toJSON()
                    res.send({
                        user: userJson
                    })
                }
            })

        } // end try statement

        //catching other errors that may occur
        //not users fault so throw 500 error
        catch (err) {
            res.status(500).send({
                error: 'an error has occured when attempting to login'
            })
        }

    }//end Login
}//end Module exports
