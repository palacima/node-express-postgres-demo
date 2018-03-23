CREATE TABLE characters(
  id serial,
  name varchar(50),
  species varchar(50)
);

CREATE TABLE locations(
  id serial,
  name varchar(50),
  climate varchar(50)
);

CREATE TABLE traveled(
  characters varchar(50),
  locations varchar(50)
);

INSERT INTO characters(name, species)
VALUES
('Luke Skywalker', 'Human'),
('Jar Jar Binks', 'Gungan'),
('Jabba the Hut', 'Bomarr Monk'),
('R2-D2', 'Astromech Droid');

INSERT INTO locations(name, climate)
VALUES
('Naboo', 'Temperate'),
('Tatooine', 'Desert'),
('Havoc Outpost', 'Temperate');

INSERT INTO traveled(characters, locations)
VALUES
('Luke Skywalker', 'Tatooine'),
('Jabba the Hut', 'Tatooine'),
('R2-D2', 'Naboo'),
('R2-D2', 'Tatooine'),
('R2-D2', 'Havoc Outpost'),
('Jar Jar Binks', 'Naboo');
