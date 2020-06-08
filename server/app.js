'use strict'

const bodyParser = require ('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');

//rutas
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const data = require('./data/phones.json')


app.get("/phones", (req, res) => {
    res.status(200).json(data);
});

app.get("/phones/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json(data[id]);
});

const appPort = process.env.PORT || 3002; 

app.listen(appPort, () => console.log('Server started in port', appPort));

module.exports= app; 