const { Sequelize, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize('postgres::memory:');
const sequelize = require("./../database/pgDatabase");

const User = sequelize.define("user_account", {
//   user_id: {
//     primaryKey: true,
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//   },
  username: DataTypes.TEXT,
  email: DataTypes.TEXT,
  password: DataTypes.TEXT,
  role: {
    type: DataTypes.TEXT,
    defaultValue: "user",
  },
  last_login: {
    type: DataTypes.DATE,
    defaultValue: Date.now(),
  },
});

module.exports = User;
//   (async () => {
//     await sequelize.sync({ force: true });
//     // Code here
//   })();
