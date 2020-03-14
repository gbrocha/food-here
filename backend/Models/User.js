const { Model } = require("sequelize");
const userSchema = require('../database/schemas/User')

class User extends Model {}

module.exports = sequelize => User.init(userSchema, { sequelize })
