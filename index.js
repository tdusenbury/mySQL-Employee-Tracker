//dependencies
const mysql = require("mysql2")
const inquirer = require("inquirer");
const figlet = require("figlet");

//questions to determine which function to run
const questions = [
    {
        type: 'list',
        name: 'choices',
        message: 'What would you like to do? Use the arrow keys to travel up and down...EXIT is last.',
        choices: [
            'View All Employees', 
            'View All Roles', 
            'View All Departments',
            'Add Employee', 
            'Add Role', 
            'Add Department', 
            'Update Employee Role', 
            'EXIT'
        ]
    },
]

//function to connect to be called in each query
const db = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'tracker_db',
    },
    console.log(`Connected to the tracker_db database`)
);


db.connect((error) => {
    if (error) throw error;
    console.log("Connection is completed!");

    // Figlet creates fun title  for the application
    figlet("Slayer Sitch Tracker", function (err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        console.log(data);
    
        initialPrompt();
    });
});





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

// View all employees 
function viewAllEmployees() {
    db.query('SELECT * FROM employees', function (err, response) {
        console.table(response)
        initialPrompt();
        })
}

// View all roles
function viewAllRoles() {
    db.query('SELECT * FROM roles', function (err, response) {
        console.table(response)
        initialPrompt()
    })
}

// View all departments
function viewAllDepartments() {
    db.query('SELECT * FROM departments', function (err, response) {
        console.table(response)
        initialPrompt()
    })
}

// Add an employee
function addEmployee() {

    // Query list of roles.
    const retrieveRole = "SELECT * FROM roles";
        db.query(retrieveRole, (err, results) => {
            if (err) throw err;

        // Then map them into an array so they can be accessed when prompted.
        const roleList = results.map((roles) => roles.title);
    

        // Now query list of employees.
        db.query("SELECT * FROM employees", (err, results) => {
            if (err) throw err;
        // Then map them into an array so they can be accessed when prompted as first and last names.
        const managerList = results.map((employees) => {
            return `${employees.first_name} ${employees.last_name}`;
        });

    // Now ask the questions:
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
                // asks for results of query 'retrieveRole'
                choices: roleList,
                },
                {
                type: "list",
                name: "manager",
                message: "Choose the employee's Manager:",
                // asks for results of query 'retrieveMgrName'
                choices: managerList,
                },
            ])
                // Using the answers from prompts:
            .then((answer) => {
            // Need to find department id from department chosen for new employee
                db.query("SELECT id FROM roles WHERE title = ?", [answer.roleID], function (err, res) {
                    if (err) throw err;
                    let role_id = res[0].id;
                
                    // Get the ID for the manager chosen by user and split into 2 variables to be analyzed.
                    const mgrName = answer.manager.split(" ");
                    const mgr_first = mgrName[0];
                    const mgr_last = mgrName[1];
                    
                    // query to pull id for that selected manager
                    db.query("SELECT id FROM employees WHERE first_name = ? AND last_name = ?",
                        [mgr_first, mgr_last], function (err, res) {
                            if (err) throw err;

                            const mgrID = res[0].id;
                
                            db.query("INSERT INTO employees SET ?", 
                                {
                                first_name: answer.firstName,
                                last_name: answer.lastName,
                                role_id: role_id,
                                manager_id: mgrID,
                                },
                                    (err, res) => {
                                    if (err) throw err;
                                    viewAllEmployees();
                                }
                            );
                        }
                    );
                });
            });
        });
    });
}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "addDepartment",
                message: "What would you like to name the new department?",
            },
        ])
        .then((answer) => {
            db.query("INSERT INTO departments (dept_name) VALUES (?)", [answer.addDepartment], (err, response) => {
                if (err) throw err;
                viewAllDepartments();
            })
        })
    }

function addRole() {
    const retrieveDepartments = "SELECT * FROM departments";
        db.query(retrieveDepartments, (err, results) => {
            if (err) throw err;
        
        const deptList = results.map((dept) => dept.dept_name);

    inquirer
        .prompt([
            {
                type: "input",
                name: "newRole",
                message: "What would you like to name the new role?"
            },
            {
                type: "input",
                name: "newSalary",
                message: "What is the salary for this role?"
            },
            {
                type: "list",
                name: "deptName",
                message: "To which department is this role assigned?",
                choices: deptList,
            },
        ])
        .then((answer) => {
            const pullDeptID = "SELECT id FROM departments where dept_name = ?";

            db.query(pullDeptID, answer.deptName, (err, results) => {
                if (err) throw err;

                const dept_id = results[0].id

                const newRoleData = {title: answer.newRole, salary: answer.newSalary, dept_id: dept_id,};

                db.query("INSERT INTO roles SET ?", newRoleData, (err) => {
                    if (err) throw err;
                    console.log(`A new Role called ${answer.newRole} in the ${answer.deptName} has been successfully added.`);
                    viewAllRoles();
                });
            });
        });
    })
}


function updateEmployeeRole() {

    db.query("SELECT * FROM employees", (err, results) => {
        if (err) throw err;
        const empList = results.map((employees) => {
            return `${employees.first_name} ${employees.last_name}`;
        });

        db.query("SELECT * FROM roles", (err, results) => {
            if (err) throw err;
        
            const roleList = results.map((roles) => roles.title);
        
            inquirer
                .prompt([
                    {
                        name: "updateEmployeeRole",
                        type: "list",
                        message: "Select the employee you wish to update:",
                        choices: empList,
                    },
                    {
                        name: "role",
                        type: "list",
                        message: "Please select the employee's new role from the list below:",
                        choices: roleList,
                    },
                ])
                    .then((answer) => {
                        db.query("SELECT id FROM roles WHERE title = ?", [answer.role], function (err, res) {
                            if (err) throw err;

                            let role_id = res[0].id;

                            const empName = answer.updateEmployeeRole.split(" ");
                            const emp_first = empName[0];
                            const emp_last = empName[1];

                            db.query("SELECT id FROM employees WHERE first_name = ? AND last_name = ?", [emp_first, emp_last], function (err, res) {
                                if (err) throw err;
                                const empID = res[0].id;
                            
                                db.query("UPDATE employees SET role_id = ? WHERE id = ?", [role_id, empID], function (err, res) {
                                    if (err) throw err;
                                    console.log(`${answer.updateEmployeeRole} role has been updated.`);
                                    viewAllEmployees();
                                }
                            );
                        }
                    );
                });
            });
        });
    });
}

