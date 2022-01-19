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

router.get('/:id', async (req, res, next) => {
  try {
    // const id = req.params.id;
    // This is an example using object destructuring
    const { id } = req.params;
    const product = await service.findOne(id);

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const product = await service.create(body);

  res.status(201).json({
    message: 'created',
    data: product
  })
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const product = await service.update(id, body);

    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const product = await service.update(id, body);

    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const result = service.delete(id);

  res.json(result);
});

module.exports = router;
