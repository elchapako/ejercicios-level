CREATE DATABASE runners;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(60),
    email TEXT,
    kilometers integer
);

INSERT INTO users (name, email, kilometers) VALUES 
    ('Edwin', 'edwin@gmail.com', 10);