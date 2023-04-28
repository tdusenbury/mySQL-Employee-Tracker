DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dept_names VARCHAR(30)
);

CREATE TABLE job_titles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES job_titles(id),
   /* manager_id INT NULL,
    FOREIGN KEY (manager_id) REFERENCES employees(id)*/
);

