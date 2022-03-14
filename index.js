const inquirer = require('inquirer');
const cTable = require('console.table');
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

const init = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'init',
            message: 'Select one of the following:',
            choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
            validate: whatDo => {
                if ('View all Departments' || 'View all Roles' || 'View all Employees' || 'Add a Department' || 'Add a Role' || 'Add an Employee' || 'Update an Employee Role') {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then(function ({ init }) {
        switch (init) {
        case 'View all Departments': 
            viewDepartment();
            break;
        
        case 'View all Roles':
            viewRole();
            break;
        
        case 'View all Employees':
            viewEmployee();
            break;
        
        case 'Add a Department':
            addDepartment();
            break;
        
        case 'Add a Role':
            addRole();
            break;
        
        case 'Add an Employee':
            addEmployee();
            break;
        
        case 'Update an Employee Role':
            updateRole();
            break;
        }
    });
}

const addDepartment = async (department) => {
    await inquirer.prompt([
        {
            type: 'input',
            name: 'newDepartment',
            message: 'What is the name of the Department you would like to add?',
            validate: departmentNameInput => {
                if (departmentNameInput) {
                    return true;
                } else {
                    console.log('Please enter a Department name!');
                    return false;
                }
            }
        }
    ])
    .then(insertDepartment(department));
}

const addRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'newRole',
            message: 'What is the name of the Role you would like to add?',
            validate: roleNameInput => {
                if (roleNameInput) {
                    return true;
                } else {
                    console.log('Please enter a Role name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this Role?',
            validate: salaryInput => {
                if (salaryInput) {
                    return true;
                } else {
                    console.log('Please enter a salary for this Role!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'roleDepartment',
            message: 'What Department does this Role belong to?',
            validate: departmentInfo => {
                if (departmentInfo) {
                    return true;
                } else {
                    console.log('Please enter the Department this Role belongs to!');
                    return false;
                }
            }
        }
    ])
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "What is the Employee's first name?",
            validate: firstName => {
                if (firstName) {
                    return true;
                } else {
                    console.log("Please enter the Employee's first name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the Employee's last name?",
            validate: lastName => {
                if (lastName) {
                    return true;
                } else {
                    console.log("Please enter the Employee's last name!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'employeeRole',
            message: "What is this Employee's role?",
            choices: ['Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer'],
            validate: employeeRole => {
                if (employeeRole) {
                    return true;
                } else {
                    console.log('Choose a role for this employee!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manager',
            message: 'What manager does this Employee report to?',
            validate: manager => {
                if (manager) {
                    return true;
                } else {
                    console.log("Please enter the Employee's Manager!");
                    return false;
                }
            }
        }
    ])
}

const viewDepartment = () => {
    db.query(`SELECT * FROM department`, (err, rows) => {
        const table = cTable.getTable(rows)
        console.log(table);
        init();
    });

}

const viewRole = () => {
    db.query(`SELECT * FROM role`, (err, rows) => {
        const table = cTable.getTable(rows)
        console.log(table);
        init();
    })
}

const viewEmployee = () => {
    db.query(`SELECT * FROM employee`, (err, rows) => {
        const table = cTable.getTable(rows)
        console.log(table);
        init();
    })
}

const insertDepartment = (department) => {
    db.query(`INSERT INTO department`, (err, rows) => {
        const table = cTable.getTable(rows)
        console.log(table);
        init();
    })
}

init();