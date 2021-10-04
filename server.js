const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);
db.connect((err) => {
    if (err) throw err;
});

const chooseAnOption = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "option",
        choices: [
            "View All Employees",
            "View All Departments",
            "Add Employees",
            "Update Employee Role",
            "Add Role",
            "Add Department" 
        ]
    },
        ];

inquirer.prompt(chooseAnOption).then((answer) => {
 switch (answer.option) {
     case "View All Employees":
         viewAllEmployees();
         break;
     case "View All Departments":
        viewAllDepartments();
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
    case "Add Department":
        addDepartment();
        break;
 }
});

const viewAllEmployees = () => {
    db.query("SELECT * FROM employee"), function(err, results) {
        console.table(results)
    }
}
// const addEmployees = () => {
//     inquirer.prompt([{
        
//     }])
// }
// const updateEmployeeRole = () => {
//     inquirer.prompt([{
        
//     }])
// }
// const addRole = () => {
//     inquirer.prompt([{
        
//     }])
// }
const viewAllDepartments = () => {
    db.query("SELECT * FROM department", function(err, results) {
        console.table(results);
        chooseAnOption();
    })
}
// const addDepartment = () => {
//     inquirer.prompt([{
        
//     }])
// }