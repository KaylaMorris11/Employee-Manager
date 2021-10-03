const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
  },
  console.log(`Connected to the movies_db database.`)
);

const chooseAnOption  = () => {
    inquirer.prompt([{
        type: "list",
        message: "Which of these options would you like to do?",
        name: "option",
        choices: [
            "View All Employees",
            "Add employees",
            "Update Employee Role",
            "Add Role",
            "View All Departments",
            "Add Department"
        ],
    }, ]).then(answer => {
        
    })
}

const viewAllEmployees = () => {
    inquirer.prompt([{

    }])
}
const addEmployees = () => {
    inquirer.prompt([{
        
    }])
}
const updateEmployee = () => {
    inquirer.prompt([{
        
    }])
}
const addRole = () => {
    inquirer.prompt([{
        
    }])
}
const viewAllDepartments = () => {
    inquirer.prompt([{
        
    }])
}
const addDepartment = () => {
    inquirer.prompt([{
        
    }])
}