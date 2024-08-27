// const mongoose = require('');

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
console.log('first')
const app = require("./app");



const port = 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`App running on port ${port}...`);
});

