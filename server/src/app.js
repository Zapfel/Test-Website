console.log('Importing Packages')

const express = require('express')
const bodyParser = require('body-parser') //efficent json parsing
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined')) //use log generator pass a string of 'combined'
app.use(bodyParser.json()) //allow parser to easily parse any json
app.use(cors()) //allow any client or host to use this (security risk)

//request types
// get post put patch delete
//below is a get request to a status endpoint located at:
//localhost:port/status
app.get('/status', (req,res) => {
	res.send({
		message: 'hello world!'
	})
})

//refer to AuthenticationService.js in client folder
//this is the express endpoint it discusses
//we can see below the ${req.body.email} in the message below calls
//the email referenced in the AuthenticationService.js file
//when adding a statement like this use '`' instead of single quotes
app.post('/register', (req,res) => {
	res.send({
		message: `Hello ${req.body.email}!, has been Registered!!!`
	})
})

app.listen(process.env.Port || 8082)
