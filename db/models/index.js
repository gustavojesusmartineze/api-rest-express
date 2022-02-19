const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');

function setupModels(sequelizeConnection) {
  User.init(UserSchema, User.config(sequelizeConnection));
  Customer.init(CustomerSchema, Customer.config(sequelizeConnection));

  Customer.associate(sequelizeConnection.models);
}

module.exports = setupModels;
