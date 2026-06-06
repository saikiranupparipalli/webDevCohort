CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    owner VARCHAR(100),
    balance int
);

INSERT INTO transactions(owner, balance)
VALUES
('sai kiran', 5000),
('charan', 5000);

SELECT * FROM transactions;