CREATE TABLE smartwatch_sales (
    sales_id SERIAL PRIMARY KEY,
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    units_sold INT NOT NULL,
    price_per_unit DECIMAL(10, 2) NOT NULL,
    sale_date DATE NOT NULL
);

INSERT INTO smartwatch_sales (brand, model, city, units_sold, price_per_unit, sale_date)
VALUES
('Apple', 'Watch Series 7', 'New York', 50, 399.99, '2026-05-01'),
('Samsung', 'Galaxy Watch 4', 'Los Angeles', 30, 299.50, '2026-05-03'),
('Garmin', 'Forerunner 945', 'Chicago', 20, 499.00, '2026-05-05'),
('Fitbit', 'Versa 3', 'Houston', 40, 229.99, '2026-05-07'),
('boAt', 'Xtend', 'Miami', 25, 89.99, '2026-05-10'),
('Noise', 'ColorFit Pro 3', 'Dallas', 35, 74.99, '2026-05-12');


 
INSERT INTO smartwatch_sales (brand, model, city, units_sold, price_per_unit, sale_date)
VALUES ('Apple', 'Watch Series 7', 'New York', 30, 399.99, '2026-05-01');

SELECT * FROM smartwatch_sales;

SELECT COUNT(*) FROM smartwatch_sales;

SELECT COUNT(*) as brand FROM smartwatch_sales;

SELECT SUM(units_sold * price_per_unit) AS total_revenue FROM smartwatch_sales; 

SELECT brand, model, units_sold * price_per_unit
AS total_revenue
FROM smartwatch_sales;

SELECT AVG(price_per_unit) AS avg_price_per_unit FROM smartwatch_sales;

SELECT MIN(price_per_unit) AS cheapest_watch FROM smartwatch_sales;
SELECT MAX(price_per_unit) AS cheapest_watch FROM smartwatch_sales;


SELECT brand, SUM(price_per_unit) FROM smartwatch_sales GROUP BY brand;

SELECT brand, model, AVG(price_per_unit) FROM smartwatch_sales GROUP BY brand, model;

SELECT brand,model,
SUM(price_per_unit * units_sold) 
AS total_revenue 
FROM smartwatch_sales 
GROUP BY brand, model;


SELECT brand, model, AVG(units_sold) AS avg_sold_watches FROM smartwatch_sales GROUP BY brand, model ORDER BY avg_sold_watches ASC;

SELECT brand, model ,SUM(price_per_unit + units_sold) AS total_sales FROM smartwatch_sales GROUP BY brand, model ORDER BY total_sales DESC;

SELECT city, model, SUM(price_per_unit * units_sold) AS units_sold FROM smartwatch_sales GROUP BY city, model ORDER BY units_sold ASC;

SELECT city, model, SUM(price_per_unit * units_sold) AS units_sold FROM smartwatch_sales GROUP BY city, model;


-- PRIMARY KEY
-- ALTER TABLE
-- - filtering commands👇🏿
-- SELECT *
-- SELECT * FROM
-- WHERE
-- - logical operators
-- AND
-- OR
-- - pattern matching
-- LIKE '__%'
-- ILIKE works similar to LIKE but case sensitive doesn't require;
-- IN
-- BETWEEN
-- - sorting
-- ORDERBY DESC, ASC

-- - pagination
-- OFFSET

-- - MODIFYING
-- () AS

-- - HOW YOU CAN GET DISTINCT VALUES
--  SELECT distinct

-- - DQL:data query lang --!!

-- ALTER TABLE COULUME
-- UPDATE SET WHERE
-- DELETE FROM WHERE

-- - DML -data manuplation language --!!

-- - DRY RUN IN SQL !!
-- SELECT * FROM <TABLE NAME>
-- WHERE <VARIABLE NAME> = ''

-- - aggregation
-- count()
-- count() as
-- SUM()
-- MIN(), MAX()

-- -- group by
-- GROUP ()

-- -- having keyword-> explore and learn about having keywords.