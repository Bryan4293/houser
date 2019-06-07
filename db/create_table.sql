CREATE TABLE houses(
    house_id SERIAL PRIMARY KEY,
    name VARCHAR (40),
    address TEXT,
    city VARCHAR (40),
    state VARCHAR(2),
    zip_code INT,
);