const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");
const PORT = process.env.PORT || 3500;

//importing sequelize from its config file
const { sequelize } = require("./config/dbConecction");

//URL decoding middleware
app.use(express.urlencoded({ extended: false }));

//JSON parser middleware
app.use(express.json());

//Main router middleware
app.use("/", mainRouter);

//Executing sequelize conection to db
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
