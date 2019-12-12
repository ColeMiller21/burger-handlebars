INSERT INTO burgers (burger_name) VALUES ("Bacon Cheeseburger");
INSERT INTO burgers (burger_name) VALUES ("BBQ Burger");
INSERT INTO burgers (burger_name) VALUES ("Double Cheeseburger");

INSERT INTO burgers (burger_name, devoured) VALUES ("California Burger", true);

DELETE FROM burgers WHERE devoured = true;
DELETE FROM burgers WHERE devoured = false;

ALTER TABLE burgers AUTO_INCREMENT = 1;