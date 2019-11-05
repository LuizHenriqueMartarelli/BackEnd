const express = require('express');
const bcrypt = require('bcryptjs');

const Constants = require('../../consts');
const employeeModel = require('../model/employeeModel');
const router = express.Router();

// ---------------- Find Employee ------------------ //
router.get('/findone', async (req,res) => {
    try {
        const ID = req.body.PES_ID;
        const employee = await employeeModel.findOne({
            where: {
                E_ID: ID
            }
        });

        delete employee.dataValues.E_PASSWORD
        if (!employee) throw 'Employee not found!';

        res.status(200).json(employee)
    } catch (err) {
        res.status(400).json({'msg': err})
    }
});

 //  ----------- Find All Employees ---------------- //
 router.get('/findall', async (req, res) => {
    try {
        const employees = await employeeModel.findAll({});
        
        for (let i=0; i < employees.length; i ++){
            delete employees[i].dataValues.E_PASSWORD
        }

        res.status(200).json(employees)
    } catch (err) {
        res.status(404).json({'msg':err})
    }
});

// -------------- Add new Employee ---------------- //
router.post('/add', async (req, res) => {
    try {        
        req.body.E_PASSWORD = bcrypt.hashSync(req.body.E_PASSWORD, Constants.bcryptKey)
        let newEmployee = await employeeModel.create(req.body);
        
        delete newEmployee.dataValues.E_PASSWORD
        res.status(201).json(newEmployee)
    }
    catch (err) {
        res.status(400).json({'msg':err});
    }
});

module.exports = router;