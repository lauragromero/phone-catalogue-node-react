'use strict'

const bodyParser = require ('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require("fs");


//rutas
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/images', express.static('./data/images'));


const routes = require("./routes/routes.js")(app, fs);



const appPort = process.env.PORT || 3002; 

app.listen(appPort, () => console.log('Server started in port', appPort));

module.exports= app; 