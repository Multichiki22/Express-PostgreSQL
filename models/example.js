const { DataTypes } = require("sequelize");

//Defining model functions with name "example"
module.exports = (DB) => {
  DB.define(
    "example",
    {
      exampleNumber: {
        type:  DataTypes.INTEGER,
      },
      exampleString: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
