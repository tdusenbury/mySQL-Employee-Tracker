INSERT INTO departments (id, dept_name)
VALUES  (1, "Management"),
        (2, "Weapons and Supplies"),
        (3, "Tactical"),
        (4, "Augury");

INSERT INTO roles (id, title, salary, dept_id)
VALUES  (1, "Master Slayer", "200000.00", 1),
        (2, "Slayer", "150000.00", 3),
        (3, "Apprentice Slayer", "75000.00", 3),
        (4, "Master Witch", "200000.00", 1),
        (5, "Witch", "17500.00", 4),
        (6, "Demon", "175000.00", 3),
        (7, "Vampire", "75000.00", 3),
        (8, "Werewolf", "175000.00", 3),
        (9, "Head Librarian", "250000.00", 1);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES  (1, "Buffy", "Summers", 1, NULL),
        (2, "Willow", "Rosenburg", 4, NULL ),
        (3, "Xander", "Harris", 2, 1),
        (4, "Anya", "Jenkins", 5, 2),
        (5, "Angel", "Angelus", 7, 1),
        (6, "Spike", "Pratt", 7, 1),
        (7, "Rupert", "Giles", 9, NULL),
        (8, "Cordelia", "Chase", 2, 2),
        (9, "Tara", "Maclay", 4, 2),
        (10, "Oz", "Osbourne", 8, 1),
        (11, "Riley", "Finn", 1, 1),
        (12, "Faith", "Lehane", 1, 13),
        (13, "Wesley", "Wyndam-Pryce", 9, NULL),
        (14, "Andrew", "Wells", 3, 2);