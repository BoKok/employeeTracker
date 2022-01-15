const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'db',
  password: 'Amaterasu#1'
});

connection.connect(function (err) {
    inquireprompt();
})

function inquireprompt() {
    inquirer.prompt({
        type: "list",
        name: "task",
        message: "Would you like to?",
        choices: [
          "View Employees",
          "View Departments",
          "View Roles",
          "Add Employees",
          "Add Department",
          "Update Employee Role",
          "Add Role",
          "End"]
    })
    .then(function ({ task }) {
        switch (task) {
          case "View Employees":
            viewEmployees();
            break;
  
          case "View Departments":
            viewDepartment();
            break;

          case "View Roles":
            viewRoles();
            break;

          case "Add Employees":
            addEmployee();
            break;

            case "Add Department":
              addDepartment();
              break;
  
          case "Remove Employees":
            removeEmployees();
            break;
  
          case "Update Employee Role":
            updateEmployeeRole();
            break;
  
          case "Add Role":
            addRole();
            break;
  
          case "End":
            connection.end();
            break;
        }
      });
  }

  function viewEmployees() {

    // var sql = "SELECT * FROM employee";
    connection.query("SELECT * FROM employee", function(err, res) {
      if (err) {
        console.log(err)
      } 
      console.table(res);
      inquireprompt();
    });
  }

  function viewDepartment() {
    console.log("hello");
    connection.query("SELECT * FROM department", function(err, res) {
      console.log(res);
      if (err) {
        console.log(err)
      }  
      console.table(res);
      inquireprompt();
    });
  }

  function viewRoles() {

    connection.query("SELECT * FROM role", function(err, res) {
      if (err) {
        console.log(err)
      }
      console.table(res);
      inquireprompt();
    });
  }

  function addRole() {
    inquirer.prompt ([
      {
        type: "input",
        name: "title",
        message: "What is the role name?"
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary?"
      },
      {
        type: "input",
        name: "department_id",
        message: "What is the department?"
      }
    ])
    .then(function(answer)
    {
      connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?);", [answer.title, answer.salary, answer.department_id], function(err, res) {
        if (err) throw err;
        console.table(res);
        inquireprompt();
      });
    });
  }

  function addDepartment() {
    inquirer.prompt ([
      {
        type: "input",
        name: "department_name",
        message: "What is the department name?"
      }
    ])
    .then(function(answer)
    {
      connection.query("INSERT INTO department (departnment_name) VALUES (?);", [answer.department_name], function(err, res) {
        if (err) throw err;
        console.table(res);
        inquireprompt();
      });
    });
  }

  function addEmployee() {
    inquirer.prompt ([
      {
        type: "input",
        name: "first_name",
        message: "What is the first name?"
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the last name?"
      },
      {
        type: "input",
        name: "role_id",
        message: "Role ID"
      },
      {
        type: "input",
        name: "manager_id",
        message: "manager ID"
      }
    ])
    .then(function(answer)
    {
      connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);", [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function(err, res) {
        if (err) throw err;
        console.table(res);
        inquireprompt();
      });
    });
  }

  function updateEmployeeRole() {
    inquirer.prompt ([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee name?"
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the new role ID?"
      }
    ])
    .then(function(answer)
    {
      connection.query("UPDATE employee SET role_ID=? WHERE first_name=?", [answer.role_id, answer.first_name], function(err, res) {
        if (err) throw err;
        console.table(res);
        inquireprompt();
      });
    });
  }