CREATE TABLE canteen_menu(
    item_id VARCHAR(100),
    item_name VARCHAR(50),
    price INT,
    is_available BOOLEAN DEFAULT TRUE
);

ALTER TABLE canteen_menu
ADD COLUMN category VARCHAR(50);

ALTER TABLE canteen_menu DROP item_id;

ALTER TABLE canteen_menu
ADD COLUMN item_id SERIAL PRIMARY KEY


INSERT INTO canteen_menu
(item_name, category, price) 
VALUES 
('biryani', 'rice dish', 350),

('vada Pav', 'snack', 15),
('samosa', 'snack', 12),
('sajma chawal', 'meals', 60),
('maggi', 'snacks', 35),
('ice tea', 'beverages', 50),
('idli', 'snacks', 50);



UPDATE canteen_menu SET price = 25 WHERE item_name = 'maggi';

UPDATE canteen_menu SET price = price - 10 WHERE item_name = 'idli';

UPDATE canteen_menu SET is_available = FALSE
WHERE item_name = 'biryani';

DELETE FROM canteen_menu WHERE item_name = 'vada Pav';

SELECT * FROM canteen_menu;