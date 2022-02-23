const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class ProductsService {

  constructor() {
  }

  async create(data) {
    const product = await models.Product.create(data);

    return product;
  }

  async find(query) {
    const options = {
      include: ['category'],
    }

    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const products = await models.Product.findAll(options);

    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }

    return product;
  }

  async update(id, data) {
    const product = await this.findOne(id);
    const updatedProduct = await product.update(data);

    return updatedProduct;
  }

  async delete(id) {
    const product = await this.findOne(id);

    await product.destroy();
    return { id };
  }

}

module.exports = ProductsService;
