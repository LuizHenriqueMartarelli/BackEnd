const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const employeeModel = require('../model/employeeModel');
const Constants = require('../../consts');
const router = express.Router();

router.get('/login', async(req, res) => {
    try {
        const employee = await employeeModel.findOne({
            where: {
                E_EMAIL: req.body.E_EMAIL
            }
        });

        const compare = bcrypt.compareSync(req.body.E_PASSWORD,employee.dataValues.E_PASSWORD)
        if (!employee || !compare) throw 'Wrong Email or Password!';

        delete employee.dataValues.E_PASSWORD;
        let E_TOKEN = jwt.sign({E_ID: employee.dataValues.E_ID, E_EMAIL: employee.dataValues.E_EMAIL}, Constants.jwtKey,{expiresIn: Constants.jwtExpires});
        let newEmployee = {
            ...employee.dataValues,
            'E_TOKEN': E_TOKEN
        }

        res.status(200).json(newEmployee);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;