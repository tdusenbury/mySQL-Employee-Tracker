INSERT INTO departments (name)
VALUES  ("Head Librarian"),
        ("Weapons and Supplies"),
        ("Tactical"),
        ("Augury");


INSERT INTO job_titles (title, salary, dept_id)
VALUES  ("Master Slayer", "200000.00 ", 13000),
        ("Slayer", "150000.00 ", 13003),
        ("Apprentice Slayer", "75000.00 ", 13013),
        ("Witch", "17500.00 ", 13113),
        ("Demon", "175000", 66600),
        ("Vampire", "75000", 66606),
        ("Werewolf", "175000", 66612);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Buffy", "Summers", 13000, 3),
        ("Willow", "Rosenburg", 13113, 4),
        ("Xander", "Harris", 13003, 2),
        ("Anya", "Jenkins", 66600, 4),
        ("Angel", "Angelus", 66600, 3),
        ("Spike", "Pratt", 66606, 3),
        ("Rupert", "Giles", 13000 , 1),
        ("Cordelia", "Chase", 13003, 2),
        ("Tara", "Maclay", 13113, 4),
        ("Oz", "Osbourne", 66612, 3),
        ("Riley", "Finn", 13000, 3),
        ("Faith", "Lehane", 13000, 3),
        ("Wesley", "Wyndam-Pryce", 13000, 1),
        ("Andrew", "Wells", 13013, 2);