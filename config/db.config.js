const mysql = require ('mysql');
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'prem',
    password: "&k&qq'F(S]56W2jq",
    database: 'node_mysql_crud_db'
});

dbConn.connect ((error) =>{
    if (error) throw error;
    console.log('database connected successfully');
})

module.exports = dbConn;