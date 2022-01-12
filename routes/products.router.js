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

module.exports = router;
