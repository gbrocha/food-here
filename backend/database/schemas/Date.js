const { DataTypes } = require("sequelize");

const dateSchema = {
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
};

module.exports = dateSchema;
