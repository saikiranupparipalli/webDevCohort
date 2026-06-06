CREATE TABLE employes(
    employe_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    sector VARCHAR(50)
);

CREATE TABLE company(
    company_id SERIAL PRIMARY KEY,
    company_name VARCHAR(100),
    role VARCHAR(50),
    salary INT CHECK( salary > 1000),
    
    employe_id INT REFERENCES employes(employe_id) ON DELETE SET NULL --foreign key
);

INSERT INTO employes(name, sector)
VALUES
('Sai Kiran', 'IT'),
('Ravi Kumar', 'Finance'),
('Priya Sharma', 'Healthcare'),
('Anil Reddy', 'Marketing'),
('Sneha Gupta', 'Education');



INSERT INTO company(company_name, role, salary, employe_id)
VALUES
('Google', 'Software Engineer', 2500000, 1),
('Microsoft', 'Financial Analyst', 1800000, 2),
('Apollo Hospitals', 'Medical Consultant', 1200000, 3),
('Deloitte', 'Marketing Executive', 1500000, 4),
('Byju''s', 'Academic Counselor', 900000, 5);



INSERT INTO employes(name, sector)
VALUES('charan', 'sales');

INSERT INTO company(company_name, role, salary, employe_id)
VALUES('TCS', 'data analyst', 12000, 4);

SELECT * from employes;
SELECT * from company;

SELECT e.name, e.sector, c.company_name, c.salary FROM employes AS e INNER JOIN company AS c ON e.employe_id = c.employe_id;


