const fs = require("fs");
const dotenv = require("dotenv");
const Task = require("../models/taskModel");
const { Sequelize } = require("sequelize");

dotenv.config({ path: "./config.env" });

const isLocal = true;

const USERNAME = "postgres";
const PASSWORD = "phalla";
const DB = "todo";
const dbConfig = {
  host: "localhost",
  dialect: "postgres",
};
const sequelize = new Sequelize(DB, USERNAME, PASSWORD, dbConfig);

const connect = async () => {
  try {
    await sequelize.authenticate();
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};
connect();

// Delete data from database
const deleteData = async () => {
  try {
    await Task.destroy({
      where: {},
      truncate: true,
    });
    console.log("Data Successfully Delete");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// console.log(process.argv);
if (process.argv[2] === "--delete") {
  deleteData();
}
