const express = require('express');
const route = express.Router();

const { authController, employeeController, stundatController } = require('../controller');
const checkToken = require('../config/checkToken');

route.use('/auth', authController);

route.use(checkToken.checkToken);
route.use('/studant',stundatController);
route.use('/employee', employeeController);

module.exports = route;