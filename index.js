const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();



const port = process.env.PORT || 5000;

//Parse request data content type application/x-ww-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//Parse request data content type application/json
app.use(bodyParser.json());


//Define route route
app.get('/', (req, res) =>{
    res.send('hello world')
});

//import employee routes

const employeeRoutes = require('./src/routes/employee.route');

//create employees routes
app.use('/api/v1/employee', employeeRoutes);


app.listen(port, () =>{
    console.log(`express server is running at port ${port}`);
})