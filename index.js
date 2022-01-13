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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
