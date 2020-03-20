const { DATABASE__PASSWORD } = require("../config/secret");

module.exports = {
  username: "appfoodhere",
  password: DATABASE__PASSWORD,
  database: "foodhere",
  host: "127.0.0.1",
  dialect: "postgres",
  define: {
    timestamps: true
  }
};
