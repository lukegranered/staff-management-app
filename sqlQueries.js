const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'bootcamp',
        database: 'staff_management'
    },
    console.log('Connected to the staff_management database.')
);

const viewDepartment = () => {

    db.query(`SELECT * FROM department`, (err, rows) => {
        console.log(rows);
    });

}

module.export = db;