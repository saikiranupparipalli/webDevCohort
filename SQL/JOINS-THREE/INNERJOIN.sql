CREATE TABLE instructors (
    instructor_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    expertise VARCHAR(100),
    email VARCHAR(150) UNIQUE NOT NULL
);

CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(150) NOT NULL,
    category VARCHAR(50),
    price NUMERIC CHECK (price >= 0),
    instructor_id INT REFERENCES instructors(instructor_id) ON DELETE SET NULL
);

INSERT INTO instructors (name, expertise, email)
VALUES 
('Amit Verma', 'Data Science', 'amit.verma@example.com'),
('Priya Iyer', 'Cybersecurity', 'priya.iyer@example.com'),
('Rahul Sharma', 'Web Development', 'rahul.sharma@example.com'),
('Neha Singh', 'Machine Learning', 'neha.singh@example.com'),
('Vikram Das', 'Digital Marketing', 'vikram.das@example.com');
-- ('sai kiran', 'data analyst', 'saikiran@gmail.com');

INSERT INTO courses (course_name, category, price, instructor_id)
VALUES
('Python for Data Science', 'Programming', 200, 1),
('Ethical Hacking Fundamentals', 'Security', 150, 2),
('Full-Stack Web Development', 'Programming', 300, 3),
('Deep Learning with TensorFlow', 'AI/ML', 250, 4),
('SEO & Digital Strategy', 'Marketing', 100, 5),
('exce & sql', 'data scraping', 400, 5);

DELETE FROM instructors WHERE instructor_id = 6;
DELETE FROM instructors WHERE instructor_id = 5;

INSERT INTO instructors(name, expertise, email)
VALUES('sai kiran', 'data analyst', 'saikiran@gmail.com');

SELECT * FROM instructors;
SELECT * FROM courses;

SELECT i.name, i.expertise, c.category, c.price FROM instructors AS i INNER JOIN courses AS c
ON i.instructor_id = c.instructor_id;