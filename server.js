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

const chooseAnOption = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "option",
        choices: [
          "View All Employees",
          "View All Departments",
          "View All Roles",
          "Add Employees",
          "Update Employee Role",
          "Add Role",
          "Add Department",
        ],
      },
    ])
    .then((answers) => {
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
      chooseAnOption();
    });
  };

  // View all Departments function
  const viewAllDepartments = () => {
    db.query("SELECT * FROM department", function (err, answers) {
      if (err) throw err;
      console.table(answers);
      chooseAnOption();
    });
  };

  // View all roles function
  const viewAllRoles = () => {
    db.query("SELECT * FROM roles", function (err, answers) {
      if (err) throw err;
      console.table(answers);
      chooseAnOption();
    });
  };

  //Add Employees function & questions
  const addEmployees = () => {
    db.query("SELECT * FROM employee WHERE roles_id =2", function (err, answers) {
      if (err) throw err;
      const managers = [...answers].map((object) => {
        const obj = {
          name: object.first_name,
          value: object.id//maybe error comma?
        }
        return obj;
      })
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
          message: "Who is the employee's manager?",
          name: "manager",
          choices: managers,
        },
        {
          type: "list",
          message: "What is the employee's role?",
          name: "role",
          choices: [
            {name: "Sales Expert", value: 1},
            {name: "Sales Manager", value: 2},
            {name: "Lawyer", value: 3},
            {name:"Software Engineer",value: 4},
            {name:"Accountant", value: 5},
            {name:"Accountant Manager",value: 6},
      ],
        },
      ])
      .then(function (answers) {
        db.query("INSERT INTO employee SET ?", {
          roles_id: answers.role,
          first_name: answers.firstName,
          last_name: answers.lastName,
          manager_id: answers.manager,
        });
        console.table(answers);
        chooseAnOption();
      });
    })
  };

  // Update Employee Role function & questions
  const updateEmployeeRole = () => {
      db.query("UPDATE employee SET roles WHERE title ?", function (err, answers) {
        console.log(answers);
        const employees = [...answers].map((object) => {
          const obj = {
            name: object.title,
            value: object.id
          }
          return obj;
        })
    inquirer
      .prompt([
        {
          type: "list",
          message: "Which employee's role do you want to update?",
          name: "employees",
          choices: employees,
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
      ])
      .then(function (answers) {
        db.query("UPDATE employee SET roles_id=? WHERE employee(id)=?", {
          title: answers.title,
          role: answers.roles_id,
          salary: answers.salary//maybe comma?
        });
        console.table(answers);
        inquirer.prompt(chooseAnOption);
      });
    })//maybe error
  };

  //Add Role function & questions
  const addRole = () => {
    inquirer
      .prompt([
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
          name: "department_name",
          choices: ["Sales", "Finance", "Engineering", "Legal"],
        },
        {
          type:"list",
          message: "What is the department id?",
          name: "department_id",
          choices: ["Sales", "Finance", "Engineering", "Legal"]
        }
      ])
      .then(function (answers) {
        db.query("INSERT INTO roles SET ?", {
          title: answers.title,
          salary: answers.salary,
          department_id: answers.department_id//maybe comma?
        });
        console.table(answers);
        chooseAnOption();
      });
  };

  //Add a department function & question
  const addDepartment = () => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the name of the department?",
          name: "department_name",
        },
      ])
      .then(function (answers) {
        db.query("INSERT INTO department SET ?", {
          department_name: answers.department_name,
        });
        console.table(answers);
        chooseAnOption();
      });
  };
};

chooseAnOption();