const { Sequelize } = require("sequelize");

const dotenv = require("dotenv");

// const DB = process.env.DATABASE;
// const USERNAME = process.env.USERNAME;
// const PASWORD = process.env.PASSWORD;

const isLocal = true;
let USERNAME, PASSWORD, DB;
let host, dbConfig;

USERNAME = "postgres";

if (isLocal) {
  DB = process.env.DATABASE_LOCAL;
  PASSWORD = process.env.PASSWORD_LOCAL;
  host = "localhost";
  dbConfig = {
    host,
    dialect: "postgres",
    define: {
      freezeTableName: true,
      underscored: true,
      quoteIdentifiers: false,
      
    },
  };
} else {
  // DB = "agtest";
  DB = "students";
  PASSWORD = "password";
  // PASSWORD = "rdsamazondb";
  host = "54.174.255.134";
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
    console.error("Unable to connect to the database:");
  }
};
connect();

module.exports = sequelize;
