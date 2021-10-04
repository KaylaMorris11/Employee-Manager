const mysql = require("mysql2");
const inquirer = require("inquirer");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

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
      "Add Department",
    ],
  },
];

// Start Question
inquirer.prompt(chooseAnOption).then((answers) => {
  switch (answers.option) {
    case "View All Employees":
      viewAllEmployees();
      break;
    case "View All Departments":
      viewAllDepartments();
      break;
    case "View All Roles":
      viewAllRoles();
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
// View all employees function
const viewAllEmployees = () => {
  db.query("SELECT * FROM employee", function (err, answers) {
    if (err) throw err;
    console.table(answers);
    inquirer.prompt(chooseAnOption);
  });
};

// View all roles function
const viewAllRoles = () => {
  db.query("SELECT * FROM roles"),
    function (err, answers) {
      if (err) throw err;
      console.table(answers);
      inquirer.prompt(chooseAnOption);
    };
};

// View all Departments function
const viewAllDepartments = () => {
  db.query("SELECT * FROM department", function (err, answers) {
    if (err) throw err;
    console.table(answers);
    inquirer.prompt(chooseAnOption);
  });
};

//add Employees function & questions
const addEmployees = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "lastName",
      },
      {
        type: "list",
        message: "What is the employee's role?",
        name: "role",
        choices: [
          "Sales Expert",
          "Sales Manager",
          "Lawyer",
          "Software Engineer",
          "Accountant",
          "Accountant Manager",
        ],
      },
    
    ])
    .then(function (answers) {
      db.query("INSERT INTO employee SET ?", {
        first_name: answers.firstName,
        last_name: answers.lastName,
      });
      console.table(answers);
      inquirer.prompt(chooseAnOption);
    });
};

// Update Employee Role function & questions
const updateEmployeeRole = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the role?",
      name: "role",
    },
    {
      type: "input",
      message: "What is the salary of the role?",
      name: "salary",
    },
    {
      type: "list",
      message: "Which department does the role belong to?",
      name: "department",
      choices: ["Sales", "Finance", "Engineering", "Legal"],
    },
  ]);
};

//Add Role function & questions
const addRole = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the title of the role?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the salary of the role?",
      name: "salary",
    },
    {
      type: "list",
      message: "Which department does the role belong to?",
      name: "roledepartment",
      choices: ["Sales", "Finance", "Engineering", "Legal"],
    },
  ])
  .then(function (answers) {
    db.query("INSERT INTO role SET ?", {
      title: answers.title,
      salary: answers.salary,

    });
    console.table(answers);
    inquirer.prompt(chooseAnOption);
  });
};
//Add a department function & question
const addDepartment = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the department?",
      name: "department",
    },
  ]);
};
