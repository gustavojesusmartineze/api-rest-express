const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello this is my app');
});

app.get('/new-route', (req, res) => {
  res.send('Hello this is a new route for my app');
});

app.get('/products', (req, res) => {
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

app.get('/products/:productId', (req, res) => {
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

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});

app.get('/users', (req, res) => {
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
