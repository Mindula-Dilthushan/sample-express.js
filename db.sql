CREATE DATABASE onsty_db;

use onsty_db;

CREATE TABLE user ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR (255) NOT NULL UNIQUE,
    mobile VARCHAR (255) NOT NULL UNIQUE
);


INSERT INTO user (name, email, mobile) VALUES 
('mindula', 'mindula@gmail.com', '074 123 4567');