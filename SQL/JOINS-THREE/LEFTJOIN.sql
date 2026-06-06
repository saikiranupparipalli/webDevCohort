SELECT i.name, i.expertise, c.category, c.price FROM instructors AS i LEFT JOIN courses AS  c ON i.instructor_id = c.instructor_id;

SELECT i.name, i.expertise, c.category, c.price FROM instructors AS i RIGHT JOIN courses AS  c ON c.instructor_id = i.instructor_id;

SELECT i.name, i.expertise, c.category, c.price FROM instructors AS i FULL OUTER JOIN courses AS  c ON c.instructor_id = i.instructor_id;

 

