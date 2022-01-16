const express = require('express');
const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();

  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Im a filter');
});

router.get('/:id', (req, res) => {
  // const id = req.params.id;
  // This is an example using object destructuring
  const { id } = req.params;
  const product = service.findOne(id);

  res.status(200).json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const product = service.create(body);

  res.status(201).json({
    message: 'created',
    data: product
  })
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const product = await service.update(id, body);

    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const product = await service.update(id, body);

    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
      trace: error
    });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const result = service.delete(id);

  res.json(result);
});

module.exports = router;
