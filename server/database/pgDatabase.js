const { Sequelize } = require("sequelize");

const dotenv = require("dotenv");

// const DB = process.env.DATABASE;
// const USERNAME = process.env.USERNAME;
// const PASWORD = process.env.PASSWORD;

const isLocal = false;
let USERNAME, PASSWORD, DB;
let host, dbConfig;

USERNAME = 'postgres';

if (isLocal) {
  DB = process.env.DATABASE_LOCAL;
  PASSWORD = process.env.PASSWORD_LOCAL;
  host = "localhost";
  dbConfig = {
    host,
    dialect: "postgres",
  };
} else {
  DB = "agtest";
  PASSWORD = "rdsamazondb";
  host = "agtest-db.cbeeey04ybsg.us-east-1.rds.amazonaws.com";
  dbConfig = {
    host,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  };
}
console.log(USERNAME);
// const sequelize = new Sequelize("agtest", "postgres", "rdsamazondb", {
const sequelize = new Sequelize(DB, USERNAME, PASSWORD, dbConfig);
const connect = async () => {
  try {
    await sequelize.authenticate();
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};
connect();

module.exports = sequelize;
