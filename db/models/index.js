const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Category, CategorySchema } = require('./category.model');
const { Product, ProductSchema } = require('./product.model');

function setupModels(sequelizeConnection) {
  User.init(UserSchema, User.config(sequelizeConnection));
  Customer.init(CustomerSchema, Customer.config(sequelizeConnection));
  Category.init(CategorySchema, Category.config(sequelizeConnection));
  Product.init(ProductSchema, Product.config(sequelizeConnection));

  User.associate(sequelizeConnection.models);
  Customer.associate(sequelizeConnection.models);
  Category.associate(sequelizeConnection.models);
  Product.associate(sequelizeConnection.models);
}

module.exports = setupModels;
