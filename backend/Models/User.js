const { Model, DataTypes } = require("sequelize");

class User extends Model {}

const userSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

module.exports = sequelize => User.init(userSchema, { sequelize });
