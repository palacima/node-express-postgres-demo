# Running Demo
Launch `psql` to make a user for Node  
In psql run
```
CREATE USER node_user WITH SUPERUSER PASSWORD 'test';
SELECT * FROM pg_user; # verify user was created
```

RUN `chmod 700 ./bin/configdb`

```
npm install
npm run config
npm run dev
```
