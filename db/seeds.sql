INSERT INTO departments (dept_name)
VALUES  ("Management"),
        ("Weapons and Supplies"),
        ("Tactical"),
        ("Augury");

INSERT INTO roles (title, salary, dept_id)
VALUES  ("Master Slayer", "200000.00", 1),
        ("Slayer", "150000.00", 3),
        ("Apprentice Slayer", "75000.00", 3),
        ("Master Witch", "200000.00", 1),
        ("Witch", "17500.00", 4),
        ("Demon", "175000.00", 3),
        ("Vampire", "75000.00", 3),
        ("Werewolf", "175000.00", 3),
        ("Head Librarian", "250000.00", 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Buffy", "Summers", 1, NULL),
        ("Willow", "Rosenburg", 4, NULL ),
        ("Xander", "Harris", 2, 1),
        ("Anya", "Jenkins", 5, 2),
        ("Angel", "Angelus", 7, 1),
        ("Spike", "Pratt", 7, 1),
        ("Rupert", "Giles", 9, NULL),
        ("Cordelia", "Chase", 2, 2),
        ("Tara", "Maclay", 4, 2),
        ("Oz", "Osbourne", 8, 1),
        ("Riley", "Finn", 1, 1),
        ("Faith", "Lehane", 1, 13),
        ("Wesley", "Wyndam-Pryce", 9, NULL),
        ("Andrew", "Wells", 3, 2);