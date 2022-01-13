const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello this is my app');
});

routerApi(app);

app.get('/new-route', (req, res) => {
  res.send('Hello this is a new route for my app');
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
