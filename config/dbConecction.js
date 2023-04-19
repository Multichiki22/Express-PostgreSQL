const { Sequelize } = require("sequelize");
require("dotenv").config();

//importing the modelsFunctions
const exampleModel1 = require("../models/example");
const exampleModel2 = require("../models/example2");

//conection info
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

//sequalize conecting to db}
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  port: DB_PORT,
  host: DB_HOST,
  dialect: "postgres",
  logging: false
});

//executing functionModels passing sequelize
//basically they are now saved as models in "sequelize.models"
exampleModel1(sequelize);
exampleModel2(sequelize);

//Extracting the models itself
//the names are the ones defined in the model file
const { example2, example } = sequelize.models;

//Using the previosly extracted models to define relationships
example.belongsToMany(example2, { through: "exampleMiddleTable" });
example2.belongsToMany(example, { through: "exampleMiddleTable" });

//exporting sequelize
module.exports = { ...sequelize.models, sequelize };
