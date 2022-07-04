const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');
const cors = require("cors")
express().use(cors({
    "origin":"*"
}))
// create our express app
const app = express()
// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// route
const routes = require('./Routes/Route')
app.use('/', routes)

//start server
app.listen(3000, ()=>{
    console.log("listening at port:3000")
}) 