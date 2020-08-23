const mongoose = require('mongoose');


const EmployeeSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName : {
        type: String
    },
    departement : {
        type: String
    },
    joinedOn : {
        type: Date
    }
},{
    timestamp: true
})


const Employee = mongoose.model('employee',EmployeeSchema);


module.exports = Employee;
