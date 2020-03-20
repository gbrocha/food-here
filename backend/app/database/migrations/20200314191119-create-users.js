const userSchema = require("../schemas/User");
const dateSchema = require("../schemas/Date");

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Users", {
      ...userSchema,
      ...dateSchema
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};
