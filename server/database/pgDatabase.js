const { Sequelize } = require("sequelize");

const dotenv = require("dotenv");

const DB = process.env.DATABASE;
const USERNAME = process.env.USERNAME;
const PASWORD = process.env.PASSWORD;

const sequelize = new Sequelize(DB, USERNAME, PASWORD, {
  host: "localhost",
  dialect: "postgres",
});
const connect = async () => {
  try {
    await sequelize.authenticate();
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};
connect();

module.exports = sequelize;