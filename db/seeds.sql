INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Fincance'),
    ('Legal');

INSERT INTO role (title, salary)
VALUES
    ('Salesperson', 60500),
    ('Lead Engineer', 150000),
    ('Software Engineer', 75000),
    ('Account Manager', 200000),
    ('Accountant', 80000),
    ('Legal Team Lead', 250000),
    ('Lawyer', 900000);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
    ('John', 'Doe', 'Account Manager'),
    ('Jane', 'Doe', 'Software Engineer'),
    ('Jackie', 'Chan', 'Software Engineer'),
    ('Sharon', 'Osbourne', 'Account Manager'),
    ('Ozzy', 'Osbourne', 'Software Engineer'),
    ('Ashton', 'Kutcher', 'Accountant'),
    ('Mila', 'Kunis', 'Lawyer'),
    ('Steve', 'Carrell', 'Legal Team Lead'),
    ('Mila', 'Jovovich', 'Lead Engineer'),
    ('Bruce', 'Willis', 'Salesperson');