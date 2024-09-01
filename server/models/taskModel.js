const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./../database/pgDatabase");

const Task = sequelize.define("task", {
  user_id: DataTypes.INTEGER,
  title: DataTypes.TEXT,
  description: DataTypes.TEXT,
  created_at: {
    type: DataTypes.DATE, 
    defaultValue: Sequelize.NOW,
  },
  updated_at: {
    type: DataTypes.DATE, 
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Task;
