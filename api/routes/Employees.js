const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');


const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/docker-example'

router.get('/', (req,res)=>{
    res.json('resources  '+ mongoURI)
})


router.get('/employee/:_id', async (req, res) => {
    const { _id } = req.params;
    const employees = await Employee.findOne({ _id });
    res.json(employees);
});

router.get('/employees', async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

router.post('/employee', async (req, res) => {
    const { firstName, lastName, departement, joinedOn } = req.body;
    const employee = new Employee({
        firstName, 
        lastName,
        departement ,
        joinedOn
    });
    await employee.save();
    res.json(employee);
})

router.put('/employee/:_id', async (req,res)=>{

    const { _id } = req.params;

    const employee = await Employee.findOne({ _id });
    if(!employee){
        return res.json('employee not found').status(404);
    }

    const { firstName, lastName, departement, joinedOn } = req.body;

    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.departement = departement;
    employee.joinedOn = joinedOn;

    await employee.save();

    res.json(employee).status(204);
})

router.get('/delete/:_id', async (req,res)=>{
    console.log("delete route")
    const { _id } = req.params;
    const employee = await Employee.findOne({ _id });
    if(!employee){
        return res.json('employee not found').statu(404);
    }

    console.log("deleted")
    await employee.delete();

    res.json('deleted').status(200);
})


module.exports = router;