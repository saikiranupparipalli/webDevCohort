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

-- BEGIN
-- UPDATE <tablename> SET balance = balance - 500 WHERE owner = 'sai kiran';
-- SELECT * FROM transactions;
-- UPDATE <tablename> SET balance = balance + 500 WHERE owner = 'charan';
-- SELECT * FROM transactions;
-- COMMIT 
-- ROLLBACK



-- docker postgres(ps)

-- docker run -d --name <container name> -e POSTGRES_PASSWORD=<password> -p <ports> postgres:<database version>

-- docker exec -it <docker container name> -U <username>
-- \l -to the list to db's in vs code
-- \c -your database_name -to connect to db
-- \dt -to see the tables inside db
-- \ !clear
-- \q