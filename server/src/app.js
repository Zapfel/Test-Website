console.log('Importing Packages')

const express = require('express')
const bodyParser = require('body-parser') //efficent json parsing
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')


//Authentication Packages
const session = require('express-session')

mongoose.connect(config.db.connection) //connects to db, refer to config for other details

const app = express()
app.use(morgan('combined')) //use log generator pass a string of 'combined'
app.use(bodyParser.json()) //allow parser to easily parse any json
app.use(cors()) //allow any client or host to use this (security risk)
app.listen(config.port) //sets port to value in config.js
app.use(cookieParser())
app.use(session({
    secret:'Temp Secret',
    resave: false,
    saveUnititalized: true,
    // cookie: {
    //secure: true    
    //}
}))

//imports routes from the routes.js file
require('./routes')(app)

