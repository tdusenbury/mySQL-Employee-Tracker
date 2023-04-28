INSERT INTO departments (dept_names)
VALUES  ("Head Librarian"),
        ("Weapons and Supplies"),
        ("Tactical"),
        ("Augury");

INSERT INTO roles (title, salary, dept_id)
VALUES  ("Master Slayer", "200000.00", 1),
        ("Slayer", "150000.00", 3),
        ("Apprentice Slayer", "75000.00", 13),
        ("Witch", "17500.00", 14),
        ("Demon", "175000", 5),
        ("Vampire", "75000", 6),
        ("Werewolf", "175000", 7);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Buffy", "Summers", 1, 3),
        ("Willow", "Rosenburg", 4, 2),
        ("Xander", "Harris", 2, 4),
        ("Anya", "Jenkins", 5, 4),
        ("Angel", "Angelus", 5, 3),
        ("Spike", "Pratt", 6, 3),
        ("Rupert", "Giles", 1 , 1),
        ("Cordelia", "Chase", 2, 4),
        ("Tara", "Maclay", 4, 2),
        ("Oz", "Osbourne", 7, 3),
        ("Riley", "Finn", 1, 3),
        ("Faith", "Lehane", 1, 3),
        ("Wesley", "Wyndam-Pryce", 1, 1),
        ("Andrew", "Wells", 3, 2);
