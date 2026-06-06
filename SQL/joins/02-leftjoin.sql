SELECT s.name, s.email, s.branch, i.company_name, i.stipend, i.role FROM student AS s LEFT JOIN internship AS i ON s.student_id = i.student_id; 

SELECT s.name, s.email, s.branch, i.company_name, i.stipend, i.role FROM student AS s RIGHT JOIN internship AS i ON s.student_id = i.student_id; 

SELECT s.name, s.branch, i.company_name, i.stipend, i.role FROM student AS s RIGHT JOIN internship AS i ON s.student_id = i.student_id; 
