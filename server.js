const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'db'
});

connection.connect(function (err) {
    inquireprompt();
})

function inquireprompt() {
    inquirer.prompt({
        type: "list",
        name: "task",
        message: "Would you like to do?",
        choices: [
          "View Employees",
          "View Employees by Department",
          "Add Employees",
          "Remove Employees",
          "Update Employee Role",
          "Add Role",
          "End"]
    })
    .then(function ({ task }) {
        switch (task) {
          case "View Employees":
            viewEmployees();
            break;
  
          case "View Employees by Department":
            viewEmployeeByDepartment();
            break;
        
          case "Add Employee":
            addEmployee();
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


    var sql = "SELECT * FROM employee";
    connection.query("SELECT * FROM employee", function (err, res) {
      if (err) throw err;
  
      console.table(res);
      inquirePrompt();
    });
  
  }