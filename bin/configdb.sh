#!/bin/bash

export PGPASSWORD='test'

database="starwarsdb"

echo "Configuring database: $database"

createdb -U node_user starwarsdb

psql -U node_user starwarsdb < ./bin/sql/starwars.sql

echo "$database was configured"
