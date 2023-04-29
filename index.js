//dependencies
const connection = require('./config/connection')
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const db = connection;

//function to connect to be called in each query
connection.connect((error) => {
    if (error) throw error;
    console.log("Connection is completed!");
    initialPrompt();
})
//questions to determine which function to run
const questions = [
    {
        type: 'list',
        name: 'choices',
        message: 'What would you like to do:',
        choices: [
            'View All Employees', 
            'View All Roles', 
            'View All Departments',
            'Add Employee', 
            'Add Role', 
            'Add Department', 
            'Update Employee Role', 
            'Exit']
    },
]
//function that starts once 'node index.js' typed in (ask questions first, then runs specific task/query requested)
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
    inquirer
        .prompt([
            {
                type: "input",
                name: "firstName",
                message: "Enter the employee's first name:"
            },
            {
                type: "input",
                name: "lastName",
                message: "Enter the employee's last name:"
            },
            {
                type: "list",
                name: "roleID",
                message: "Choose the employee's Role:",
                choices: [
                    'ID #1: Master Slayer', 
                    'ID #2: Slayer', 
                    'ID #3: Apprentice Slayer',
                    'ID #4: Witch', 
                    'ID #5: Demon', 
                    'ID #6: Vampire', 
                    'ID #7: Werewolf'
                    ]
            },
            {
                type: "input",
                name: "managerID",
                message: "Enter the employee's manager ID:"
            },
        ])
        .then((answer) =>
            db.query("INSERT INTO employees SET ?",
            {
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: answer.roleID,
                manager_id: answer.managerID
            },
            (err, response) => {
                if (err) throw err;
                viewAllEmployees();

            }
            ))

    initialPrompt()
    }

function addRole() {
    console.log('add Role function');

    initialPrompt()
    }

    function addDepartment() {
        console.log('add Department function');
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "addDepartment",
                    message: "What would you like to name the new department?",
                },
            ])
            .then((answer) => {
                db.query("INSERT INTO departments (dept_names) VALUES (?)", answer.addDepartment, (err, response) => {
                    if (err) throw err;
                    viewAllDepartments();
                })
            })
        }

function updateEmployeeRole() {
    console.log('update employee role function');

    initialPrompt()
    }