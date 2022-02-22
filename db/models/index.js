const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Category, CategorySchema } = require('./category.model');
const { Product, ProductSchema } = require('./product.model');
const { Order, OrderSchema } = require('./order.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');

function setupModels(sequelizeConnection) {
  User.init(UserSchema, User.config(sequelizeConnection));
  Customer.init(CustomerSchema, Customer.config(sequelizeConnection));
  Category.init(CategorySchema, Category.config(sequelizeConnection));
  Product.init(ProductSchema, Product.config(sequelizeConnection));
  Order.init(OrderSchema, Order.config(sequelizeConnection));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelizeConnection));

  User.associate(sequelizeConnection.models);
  Customer.associate(sequelizeConnection.models);
  Category.associate(sequelizeConnection.models);
  Product.associate(sequelizeConnection.models);
  Order.associate(sequelizeConnection.models);
}

module.exports = setupModels;
