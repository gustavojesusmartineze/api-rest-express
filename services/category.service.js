const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class CategoryService {

  constructor(){
  }

  async create(data) {
    const category = await models.Category.create(data);

    return category;
  }

  async find() {
    return await models.Category.findAll();
  }

  async findOne(id) {
    const cateogry = await models.Category.findByPk(id, {
      include: ['products']
    });

    if (!cateogry) {
      throw boom.notFound('cateogry not found');
    }

    return cateogry;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const updatedCateogry = await category.update(changes);

    return updatedCateogry;
  }

  async delete(id) {
    const category = await this.findOne(id);

    await category.destroy();
    return { id };
  }

}

module.exports = CategoryService;
