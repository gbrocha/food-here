const { Model, DataTypes } = require("sequelize");

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

class User extends Model {}
// export default User;
module.exports = { User, userSchema };
