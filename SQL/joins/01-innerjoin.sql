CREATE TABLE student(
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    branch VARCHAR(50)
);

CREATE TABLE internship(
    internship_id SERIAL PRIMARY KEY,
    company_name VARCHAR(100),
    role VARCHAR(50),
    stipend INT CHECK( stipend > 1000),
    status VARCHAR(20),

    student_id INT REFERENCES student(student_id) ON DELETE CASCADE --foreign key
);

CREATE TABLE profile(
    profile_id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    avatar VARCHAR(100),

    student_id INT REFERENCES student(student_id) ON DELETE SET NULL
);


INSERT INTO student(name, email, branch)
VALUES
('rahul', 'rahul@gmail.com', 'EC'),
('priya', 'priya123@gmail.com', 'CS'),
('bharath', 'bharath@gmail.com', 'MECH'),
('rajesh', 'rajesh20@gmail.com', 'CIVIL'),
('abhinav', 'abhinav1@gmail.com', 'CSD'),
('prabhas', 'prabhas99@gmail.com', 'CSM'); --not got internship


INSERT INTO internship(company_name, role, stipend, status, student_id)
VALUES
('Google', 'Software Engineering Intern', 50000, 'Completed', 1),
('Microsoft', 'Backend Intern', 45000, 'Ongoing', 2),
('Amazon', 'Cloud Intern', 40000, 'Completed', 3),
('Infosys', 'Java Developer Intern', 15000, 'Ongoing', 4),
('TCS', 'Data Analyst Intern', 12000, 'Pending', 5),
('Wipro', 'Full Stack Intern', 18000, 'Ongoing', 1),
('Accenture', 'Business Analyst Intern', 22000, 'Completed', 2),
('Deloitte', 'Data Science Intern', 25000, 'Pending', 3),
('IBM', 'AI Intern', 30000, 'Ongoing', 4),
('Zoho', 'Software Developer Intern', 20000, 'Completed', 5);


SELECT * FROM student;
SELECT * FROM internship;

SELECT * FROM student INNER JOIN internship ON student.student_id = internship.student_id;

DELETE FROM student WHERE student_id = 3;

SELECT name, branch, company_name, role, stipend, status FROM student INNER JOIN internship ON student.student_id = internship.student_id;