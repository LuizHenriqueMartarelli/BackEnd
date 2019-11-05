const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const rotas = require('./routes/routes');
const Constants = require('../consts');

const door = Constants.apiDoor;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(rotas);

//função de erro qndo não se acha a rota
app.use((req, res, next) => res.status(404).json({'msg': 'Route not found!'}));
app.listen(door,console.log(`Listening at the door ${door}`))
