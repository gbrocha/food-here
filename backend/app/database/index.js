const { Sequelize } = require("sequelize");
const config = require("../config/database");

const sequelize = new Sequelize(config);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return Promise.resolve();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return Promise.reject(error);
  }
};

module.exports = { sequelize, connect };
