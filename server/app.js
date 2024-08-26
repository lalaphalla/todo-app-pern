const express = require("express");
const morgan = require("morgan");
const AppError = require("./utils/AppError");
const sequelize = require("./database/pgDatabase");
const app = express();
const cors = require('cors');
const userRouter = require("./routes/userRoutes");
const taskRouter = require("./routes/taskRoutes");

// Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors())

// Body parser
app.use(express.json());

(async () => {
  await sequelize.sync();
})();

// Route
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;

