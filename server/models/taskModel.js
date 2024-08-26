const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./../database/pgDatabase");

const Task = sequelize.define("tasks", {
  user_id: DataTypes.INTEGER,
  title: DataTypes.TEXT,
  description: DataTypes.TEXT,
});

module.exports = Task;
