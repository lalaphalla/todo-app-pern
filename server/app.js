const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
// const AppError = require("./utils/AppError");
const sequelize = require("./database/pgDatabase");
const userRouter = require("./routes/userRoutes");
const taskRouter = require("./routes/taskRoutes");
const cookieParser = require("cookie-parser");

const corsOptions = {
  origin: 'http://localhost:5173', // Specify your frontend origin
  credentials: true, // Allow cookies and other credentials
};

const app = express();
app.use(cors(corsOptions));
// Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body parser
app.use(express.json());
app.use(cookieParser());

// app.options('/api/v1/users/login', cors());

(async () => {
  await sequelize.sync();
})();

// Route
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

// app.all("*", (req, res, next) => {
  // next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

module.exports = app;

