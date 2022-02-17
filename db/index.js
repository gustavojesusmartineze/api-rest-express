const { User, UserSchema } = require('./user.model');

function setupModels(sequelizeConnection) {
  User.init(UserSchema, User.config(sequelizeConnection));
}

module.exports = setupModels;
