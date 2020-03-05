const { Sequelize } = require("sequelize");
const {User, userSchema} = require("./Models/User");
const {DATABASE__PASSWORD} = require('./config/secret')

const sequelize = new Sequelize("foodhere", "appfoodhere", DATABASE__PASSWORD, {
  host: "127.0.0.1",
  dialect: "postgres"
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return Promise.resolve();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect().then(async () => {
  User.init(userSchema,{
    sequelize,
    modelName: "User"
  });
  // User.sync({force:true});

  // user = await User.create({
  //   name: "Gabriel"
  // });

  // await user.save();

  const users = await User.findAll();

  console.log("All users:", JSON.stringify(users, null, 2));
});
