INSERT INTO department (id, department_name)
VALUES  (1, "Sales"),
        (2, "Finance"),
        (3, "Legal"),
        (4, "Engineering");

INSERT INTO roles (id, title, salary, department_id)
VALUES  (1, "Sales Expert", 35000, 1),
        (2, "Sales Manager", 55000, 1),
        (3, "Lawyer", 75000, 3),
        (4, "Software Engineer", 83000, 4),
        (5, "Accountant", 55000, 2),
        (6, "Lead Engineer", 135000, 4);
        
INSERT INTO employee (id, first_name, last_name, roles_id, manager_id)
VALUES  (6, "Kayla", "Miller", 1, NULL),
        (7, "Amanda", "Kite", 2, 7),
        (8, "Skye", "Hamilton", 3, NULL),
        (9, "Antonio", "Martin", 4, NULL),
        (10, "Joseph", "Keesler", 5, NULL),
        (11, "Candi", "Tann", 6, 9);