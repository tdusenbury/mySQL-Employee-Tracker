const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const consoleTable = require("console.table");

const db = mysql2.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'tracker_db'
    }
)

db.connect((error) => {
    if (error) throw error;

    console.log("Connection is completed!");

    initialPrompt();
})

const questions = [
    {
        type: 'list',
        name: 'choices',
        message: 'What would you like to do:',
        choices: [
            'View All Employees', 
            'View All Roles', 
            'View All Departments', 
            'Add Employee', 'Add Role', 
            'Add Department', 
            'Update Employee Role', 
            'Exit']
    },
]

function initialPrompt() {
    
    inquirer
    .prompt(questions)
    .then((answer) => {
        if (answer.choices === 'View All Employees') {
            viewAllEmployees();
        } else if (answer.choices === 'View All Roles') {
            viewAllRoles();
        } else if (answer.choices === 'View All Departments') {
            viewAllDepartments();
        } else if (answer.choices === 'Add Employee') {
            addEmployee();
        } else if (answer.choices === 'Add Role') {
            addRole();
        }  else if (answer.choices === 'Add Department') {
            addDepartment();
        } else if (answer.choices === 'Update Employee Role') {
            updateEmployeeRole();
        } else {
            db.end();
        }
    })
}

function viewAllEmployees() {
    db.query('SELECT * FROM employees', function (err, response) {
        console.table(response)
        initialPrompt();
        })
}

function viewAllRoles() {
    db.query('SELECT * FROM roles', function (err, response) {
        console.table(response)
        initialPrompt()
    })
}

function viewAllDepartments() {
    db.query('SELECT * FROM departments', function (err, response) {
        console.table(response)
        initialPrompt()
    })
}

function addEmployee() {
    console.log('add employee function');

    initialPrompt()
}

function addRole() {
    console.log('add Role function');

    initialPrompt()
}

function addDepartment() {
    console.log('add Department function');

    initialPrompt()
}

function updateEmployeeRole() {
    console.log('update employee role function');

    initialPrompt()
}