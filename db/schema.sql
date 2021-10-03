DROP TABLE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;
-- 

DROP TABLE IF EXISTS department;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
);
--

DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
    id INT NOT NULL AUTOINCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
);
--

DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
id INT NOT NULL AUTOINCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id: INT NOT NULL,
manger_id INT
);