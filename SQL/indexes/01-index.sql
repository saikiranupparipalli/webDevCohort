CREATE TABLE marks(
    marks_id SERIAL PRIMARY KEY,
    name text,
    marks INT NOT NULL
);

 


INSERT INTO marks (name, marks)
SELECT
    UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 12)),
    FLOOR(RANDOM() * 101)::INT
FROM generate_series(1, 1000000);

SELECT * FROM marks;

EXPLAIN ANALYZE SELECT * FROM marks WHERE name = '4E4D579E702B';

CREATE INDEX idx_name ON marks(marks);
DROP INDEX idx_name;

CREATE INDEX idx_name ON marks(name) INCLUDE (marks);
DROP INDEX idx_name;
