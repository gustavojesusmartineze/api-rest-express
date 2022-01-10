const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello this is my app');
});

app.get('/new-route', (req, res) => {
  res.send('Hello this is a new route for my app');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product1',
      price: 1000
    },
    {
      name: 'Product2',
      price: 1400
    },
  ]);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
