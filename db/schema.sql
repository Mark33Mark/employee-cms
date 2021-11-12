DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE business_unit (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE position_titles (
    id INT NOT NULL AUTO_INCREMENT,
    position_title VARCHAR(30) NOT NULL,
    salary DECIMAL(8),
    business_unit_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY(business_unit_id) REFERENCES business_unit(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    position_id INT,
    manager_id INT REFERENCES employee(id),
    PRIMARY KEY (id),
    FOREIGN KEY(position_id) REFERENCES position_titles(id)
    ON DELETE SET NULL
);