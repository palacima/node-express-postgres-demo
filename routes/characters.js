const { Router } = require('express');
const pool = require('../db');

const router = Router();


router.get('/', (request, response, next) => {
  console.log(request.body);
  pool.query('SELECT * FROM characters ORDER BY id ASC', (err, res) => {
    if(err) return next(err);

    response.json(res.rows);
  });
});

router.get('/:id', (request, response, next) => {

  const { id } = request.params;

  pool.query('SELECT * FROM characters WHERE id = $1', [id], (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });

});

router.post('/', (request, response, next) => {

  const { name, species } = request.body;

  pool.query(
    'INSERT INTO characters(name, species) VALUES ($1, $2)',
    [name, species],
    (err, res) => {
      if (err) return next(err);

      response.redirect('/characters');
    }
  );
});

router.put('/:id', (request, response, next) => {
  const { id } = request.params;

  const keys = ['name', 'species'];

  const fields = [];

  keys.forEach(key => {
    if (request.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE characters SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) return next(err);

        if (index === fields.length - 1) response.redirect('/characters');
      }
    )

  });
});

router.delete('/:id', (request, response, next) => {
  const { id } = request.params;

  pool.query('DELETE FROM characters WHERE id=($1)', [id], (err, res) => {
    if (err) return next(err);

    response.redirect('/characters');
  });
});

module.exports = router;
