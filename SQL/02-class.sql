CREATE TABLE ip_players(
    player_id SERIAL PRIMARY KEY,
    player_name VARCHAR(50) NOT NULL,
    runs VARCHAR(50) NOT NULL,
    run_scored INT CHECK(run_scored > 0)
);

-- ALTER TABLE ip_players
-- ADD COLUMN player_nickname VARCHAR(50);


ALTER TABLE ip_players
ADD COLUMN team_name VARCHAR(50),
ADD COLUMN role VARCHAR(50),
ADD COLUMN matches_played INT;

INSERT INTO ip_players (player_name, team_name, role, matches_played, runs, run_scored) VALUES
('Virat Kohli', 'RCB', 'Batsman', 15, 'Excellent', 973),
('Rohit Sharma', 'MI', 'Batsman', 16, 'Good', 890),
('MS Dhoni', 'CSK', 'Wicket Keeper', 14, 'Average', 520),
('Shubman Gill', 'GT', 'Batsman', 17, 'Excellent', 950),
('Hardik Pandya', 'MI', 'All Rounder', 15, 'Good', 680),
('KL Rahul', 'LSG', 'Batsman', 14, 'Good', 720),
('Ruturaj Gaikwad', 'CSK', 'Batsman', 16, 'Excellent', 810),
('Jasprit Bumrah', 'MI', 'Bowler', 15, 'Average', 120),
('Mohammed Siraj', 'RCB', 'Bowler', 14, 'Average', 90),
('Suryakumar Yadav', 'MI', 'Batsman', 15, 'Excellent', 840),
('Ravindra Jadeja', 'CSK', 'All Rounder', 16, 'Good', 460),
('Yashasvi Jaiswal', 'RR', 'Batsman', 14, 'Excellent', 780),
('Sanju Samson', 'RR', 'Wicket Keeper', 15, 'Good', 650),
('Andre Russell', 'KKR', 'All Rounder', 13, 'Good', 540),
('Sunil Narine', 'KKR', 'All Rounder', 15, 'Good', 500);

-- SELECT * FROM ip_players;

SELECT team_name, player_name FROM ip_players WHERE run_scored > '650'
 