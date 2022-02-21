const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class CustomerService {
  constructor() {
  }

  async create(data) {
    const user = await models.User.create(data.user);
    const newCustomer = await models.Customer.create({
      ...data,
      userId: user.id
    });

    return newCustomer;
  }

  async find() {
    const data = await models.Customer.findAll();

    return data;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('customer not found');
    }

    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);

    const result = await customer.update(changes);

    return result;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();

    return { id };
  }
}

module.exports = CustomerService;
