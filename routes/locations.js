const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {

  pool.query('SELECT * FROM locations ORDER BY id ASC', (err, res) => {
    if(err) return next(err);

    response.json(res.rows);
  });
});

router.get('/:id', (request, response, next) => {
  const { id } = request.params;

  pool.query('SELECT * FROM locations WHERE id=($1)', [id], (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

router.post('/', (request, response, next) => {
  const { name, climate } = request.body;

  pool.query(
    'INSERT INTO locations (name, climate) VALUES ($1, $2)',
    [name, climate],
    (res, err) => {
      if (err) return next(err);

      response.redirect('/locations');
    }
  )
});

router.put('/:id', (request, response, next) => {
  const { id } = request.params;

  const keys = ['name', 'climate'];

  const fields = [];

  keys.forEach(key => {
    if (request.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE locations SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) return next(err);

        if (index === fields.length - 1) response.redirect('/locations');
      }
    )
  });
});

router.delete('/:id', (request, response, next) => {
  const { id } = request.params;

  pool.query('DELETE FROM locations WHERE id=($1)', [id], (res, err) => {
    if (err) return next(err);

    response.redirect('/locations');
  });
});

module.exports = router;
