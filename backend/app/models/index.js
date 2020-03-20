const fs = require("fs");
const path = require("path");
const { sequelize } = require("../database");

let models = Object.create({});

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf(".") !== 0 &&
      file !== path.basename(__filename) &&
      file.slice(-3) === ".js"
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    Object.assign(models, { [model.name]: model });
  });

for (const key in models) {
  const { associate } = models[key];
  if (typeof associate === "function") return associate(models);
}

const db = {
  ...models,
  sequelize
};

module.exports = db;
