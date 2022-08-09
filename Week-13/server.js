const express = require("express");
const bodyParser = require('body-parser')
require("dotenv").config();
const request = require("request");

const city = require('./routes/city')
const multiCity = require('./routes/multiCity')
const forecast = require('./routes/forecast')
const date = require('./routes/date')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/city',city)
app.use('/multi',multiCity)
app.use('/forecast',forecast)
app.use('/date',date)

app.listen(4000,function(){
    console.log('Server running on port 4000')
})