const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/filtered', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('There are no query parameters');
  }
});

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    users.push({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      image: faker.image.imageUrl(),
    });
  }
  res.json(users);
});

module.exports = router;
