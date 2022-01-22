const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

const whitelist = ['http://localhost:5500', 'http://localhost:3500'];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) { //!origin is to allow same origin
      callback(null, true);
    } else {
      callback(new Error('Forbidden'))
    }
  }
};

app.use(express.json());
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hello this is my app');
});

routerApi(app);

// Error middlewares should be added only after routes.
// Keep in mind that the the order of execution is the same as
// the order that the middleware are added
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/new-route', (req, res) => {
  res.send('Hello this is a new route for my app');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
