CREATE TABLE ipl_player(
    player_id SERIAL PRIMARY KEY,
    player_name VARCHAR(50) NOT NULL,
    team_name VARCHAR(50),
    role VARCHAR(20),
    matches_played INT,
    runs INT,
    run_scored INT
);

INSERT INTO ipl_player(player_name, team_name, role, matches_played, runs, run_scored) VALUES
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

SELECT * FROM ipl_player;

SELECT * FROM ipl_player ORDER BY player_name DESC, runs > '600' DESC LIMIT 3;

SELECT player_name, team_name FROM ipl_player ORDER BY run_scored > '700' DESC;

SELECT player_name, runs FROM ipl_player WHERE team_name = 'RR' AND runs > '650' LIMIT 3;

 SELECT team_name, role, runs FROM ipl_player ORDER BY run_scored > '700' OFFSET 3;

SELECT player_name, role, runs ,(runs * 5)
AS modified_runs
FROM ipl_player LIMIT 5;

SELECT distinct role  FROM ipl_player

-- what is DQL?