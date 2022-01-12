USE db;
INSERT INTO department (departnment_name)
VALUES ("Management");
INSERT INTO department (departnment_name)
VALUES ("Sales");
INSERT INTO department (departnment_name)
VALUES ("HR");
INSERT INTO department (departnment_name)
VALUES ("Accounting");
INSERT INTO department (departnment_name)
VALUES ("Intern");

INSERT INTO role (title, salary, department_id)
VALUES ('Manager', 60000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Salesman', 50000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Human Resources', 40000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 60000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ('Internist', 30000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Michael', 'Scott', 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jim', 'Halpert', 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Dwight', 'Schrute', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kevin', 'Malone', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ryan', 'Howard', 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Toby', 'Flenderson', 5, null);