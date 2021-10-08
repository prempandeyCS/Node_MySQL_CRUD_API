
const EmployeeModel = require ('../models/employee.model')

//get  all employee list
exports.getEmployeeList = (req, res) =>{
    //console.log('here is the all employees list');
    EmployeeModel.getAllEmployees((err, employees) =>{
        console.log('we are here');
        if(err)
        res.send(err);
        console.log('employees', employees);
        res.send(employees);
    })
}

//get employee by id

exports.getEmployeeByID = (req, res) =>{
//console.log('get employee by id');
EmployeeModel.getEmployeeByID(req.params.id, (err, employee)=>{
    if (err)
    res.send(err);
    console.log('single emploee data', employee);
    res.send(employee);

})

}

//create new employee
exports.createNewEmployee = (req, res) =>{
        console.log('req data', req.body);
        const employeeReqData = new EmployeeModel(req.body);
        //check null
        if(req.body.constructor === Object && Object.keys(req.body).length=== 0){
            res.status(400).send({success:false, message: 'please fill all fields'})
        }else{
           EmployeeModel.createEmployee(employeeReqData, (err,employee) =>{
               if(err)
               res.send(err);
               res.json({status:true, message: 'Employee created successfully', data: employee.id})
               

           }) 
        }
    }

// update employee
exports.updateEmployee = (req, res)=>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee updated Successfully'})
        })
    }
}    
// delete employee
exports.deleteEmployee = (req, res)=>{
    EmployeeModel.deleteEmployee(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Employee deleted successully!'});
    })
}


