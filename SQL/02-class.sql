CREATE TABLE ip_players(
    player_id SERIAL PRIMARY KEY,
    player_name VARCHAR(50) NOT NULL,
    runs INT,
    run_scored INT CHECK(run_scored > 0)
);

-- ALTER TABLE ip_players
-- ADD COLUMN player_nickname VARCHAR(50);


ALTER TABLE ip_players
ADD COLUMN team_name VARCHAR(50),
ADD COLUMN role VARCHAR(50),
ADD COLUMN matches_played INT;


INSERT INTO ip_players (player_name, team_name, role, matches_played, runs, run_scored) VALUES
('Virat Kohli', 'RCB', 'Batsman', 15 , 5543, 973),
('Rohit Sharma', 'MI', 'Batsman', 16,423, 890),
('MS Dhoni', 'CSK', 'Wicket Keeper', 14,694, 520),
('Shubman Gill', 'GT', 'Batsman', 17, 950, 890),
('Hardik Pandya', 'MI', 'All Rounder', 15, 680, 732),
('KL Rahul', 'LSG', 'Batsman', 14, 720, 123),
('Ruturaj Gaikwad', 'CSK', 'Batsman', 16, 810, 1000),
('Jasprit Bumrah', 'MI', 'Bowler', 15, 120, 127),
('Mohammed Siraj', 'RCB', 'Bowler', 14, 90, 658),
('Suryakumar Yadav', 'MI', 'Batsman', 15, 840, 331),
('Ravindra Jadeja', 'CSK', 'All Rounder', 16, 460, 829),
('Yashasvi Jaiswal', 'RR', 'Batsman', 14, 780, 1456),
('Sanju Samson', 'RR', 'Wicket Keeper', 15, 650, 231),
('Andre Russell', 'KKR', 'All Rounder', 13, 540, 106),
('Sunil Narine', 'KKR', 'All Rounder', 15, 500, 798);

-- SELECT * FROM ip_players;

-- SELECT team_name, player_name FROM ip_players WHERE run_scored > '650';
 
-- SELECT player_name FROM ip_players WHERE runs > '15' AND run_scored >  '800';

-- SELECT player_name FROM ip_players WHERE team_name = 'CSK' OR team_name = 'MI';

-- SELECT player_name FROM ip_players WHERE player_name LIKE '__s_%'

-- SELECT * FROM ip_players WHERE team_name IN('RCB', 'RR');

SELECT * FROM ip_players WHERE run_scored BETWEEN 700 AND 810 ;

SELECT * FROM ip_players WHERE team_name != 'KKR';

SELECT * FROM ip_players ORDER BY player_name ASC;

SELECT player_name, role FROM ip_players ORDER BY player_name DESC;

SELECT player_name, run_scored FROM ip_players ORDER BY player_name ASC, run_scored DESC;

SELECT * FROM ip_players ORDER BY player_name LIMIT 10;

 

 