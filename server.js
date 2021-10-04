const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

const chooseAnOption = [{
        type: "list",
        message: "What would you like to do?",
        name: "option",
        choices: [
            "View All Employees",
            "Add Employees",
            "Update Employee Role",
            "Add Role",
            "View All Departments",
            "Add Department" 
        ]
        }];

inquirer.prompt(chooseAnOption).then((answer) => {
 switch (answer.option) {
     case "View All Employees":
         viewAllEmployees();
         break;
     case "Add Employees":
        addEmployees();
        break;
    case "Update Employee Role":
        updateEmployeeRole();
        break;
    case "Add Role":
        addRole();
        break;
    case "View All Departments":
        viewAllDepartments();
        break;
    case "Add Department":
        addDepartment();
        break;
 }
});

const viewAllEmployees = () => {
    inquirer.prompt([{

    }])
}
const addEmployees = () => {
    inquirer.prompt([{
        
    }])
}
const updateEmployeeRole = () => {
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