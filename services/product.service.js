const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const { pool } = require('./../libs/postgres-pool');

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.products.push(newProduct);

    return newProduct;
  }

  async find() {
    const query = 'SELECT * FROM task';
    const result = await this.pool.query(query);

    return result.rows;
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }

    return product;
  }

  async update(id, data) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw boom.notFound('product not found');
    }

    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...data
    };

    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }

    this.products.splice(index, 1);

    return { id };
  }

}

module.exports = ProductsService;
