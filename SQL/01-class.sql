-- DROP TABLE IF EXISTS student
CREATE TABLE student(
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(40)  UNIQUE,
    age INT CHECK(age > 18),
    country_code CHAR(4),
    current_status VARCHAR(20) DEFAULT 'active' CHECK
    (current_status IN ('active', 'admin', 'dropped_out')),

    masterji_handle VARCHAR(50) UNIQUE,
    has_verified_masterji BOOLEAN DEFAULT FALSE,

    current_score INT CHECK(current_score >= 0 AND current_score <= 100),

    enrollment_date DATE DEFAULT CURRENT_DATE
);

 ALTER TABLE student
 ADD COLUMN batch_name VARCHAR(50) DEFAULT 'webdev'