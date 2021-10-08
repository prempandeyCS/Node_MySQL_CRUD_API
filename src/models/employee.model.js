const dbConn = require ('../../config/db.config');

const Employee =function (employee){
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status :1;
    this.created_at = new Date();
    this.updated_at = new Date();

}

//get all employees

Employee.getAllEmployees =(result) =>{
    dbConn.query('SELECT * FROM employees', (err,res) =>{
        if(err) {
            console.log('error while fetching employees', err);
            result(null, err);
        }
        else{
            console.log('employees fetched successfully');
            result(null, res);
        }
    })
}

//get employee by id from DB
Employee.getEmployeeByID = (id, result) =>{
    dbConn.query('SELECT * FROM employees WHERE id=?', id, (err, res) =>{
        if(err) {
            console.log('Error while fetching employee by id', err);
            result(null, err);
        } else{
            result(null, res)
        }
    })
}

//create a new employee
Employee.createEmployee = (employeeReqData, result) =>{
    dbConn.query('INSERT INTO employees SET ?', employeeReqData, (err, res) =>{
        if(err){
            console.log('error while inserting data');
            result((null, err));
        }
        console.log('Employee created successfully');
        result(null, res)
    })
}

// update employee
Employee.updateEmployee = (id, employeeReqData, result)=>{
    dbConn.query('UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=?, status =? WHERE id = ?', [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,employeeReqData.organization,employeeReqData.designation,employeeReqData.salary,employeeReqData.status, id], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("Employee updated successfully");
            result(null, res);
        }
    });
}

// delete employee
Employee.deleteEmployee = (id, result)=>{
    dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the employee');
            result(null, err);
        }else{
            result(null, res);
        }
        })
    }


module.exports = Employee;
