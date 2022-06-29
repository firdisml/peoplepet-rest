//DEPENDENCY
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000



//IMPORT
const homeRoute = require('./routes/home')
const peopleRoute =  require('./routes/people')
const petRoute =  require('./routes/pet')



//MIDDLEWARE
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use('/', homeRoute)
app.use('/pet', petRoute)
app.use('/people', peopleRoute)



//CONNECT MONGO
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB!')
});



//LISTEN
app.listen(port);