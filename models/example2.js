const { DataTypes } = require("sequelize");

//Defining model functions with name "example2"
module.exports = (DB) => {
  DB.define(
    "example2",
    {
      exampleNumber2: {
        type:  DataTypes.INTEGER,
      },
      exampleString2: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
