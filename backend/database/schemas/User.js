const {DataTypes} = require('sequelize');

const userSchema = {
  id: {
    allowNull:false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

module.exports = userSchema;