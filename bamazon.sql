DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products
(
    ItemID INTEGER
    AUTO_INCREMENT NOT NULL,
ProductName VARCHAR
    (100) NOT NULL,
departmentName VARCHAR
    (100) NOT NULL,
price VARCHAR
    (10) NOT NULL,
stockQuantity INT
    (10) NOT NULL,
PRIMARY KEY
    (ItemID)
); 

INSERT INTO products
    (productName, departmentName, price, stockQuantity)
VALUES
    ("Seiko Prospex", "Men's Watch", 525, 8),
    ("Citizen Promaster Diver", "Men's Watch", 495, 5),
    ("Garmin fēnix 6X Pro Solar", "Men's Watch", 1150, 7),
    ("Casio Pro Trek Smart", "Men's Watch", 550, 6),
    ("G-Shock Mudmaster", "Men's Watch", 350, 10),
    ("G-Shock MT-G", "Men's Watch", 800, 9),
    ("Panerai Luminor", "Men's Watch", 7000, 4),
    ("TUDOR Black Bay", "Men's Watch", 3750, 3),
    ("Bell & Ross Diver", "Men's Watch", 3990, 2),
    ("Rolex DATEJUST 31", "Men's Watch", 11550, 2);



SELECT *
FROM products;