const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size || 10;

  const products = [];
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }

  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Im a filter');
});

router.get('/:productId', (req, res) => {
  // const id = req.params.productId;
  // This is an example using object destructuring
  const { productId } = req.params;
  res.json(
    {
      productId,
      name: 'Product3',
      price: 5000
    }
  );
});

router.post('/', (req, res) => {
  const body = req.body;

  res.json({
    message: 'created',
    data: body
  })
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'updated',
    data: body,
    id
  })
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'patched',
    data: body,
    id
  })
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'deleted',
    id
  })
});

module.exports = router;
