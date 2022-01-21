const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().alphanum().min(10);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required()
});

module.exports = { createProductSchema };
