const catchAsync = require("../utils/catchAsync");
const Task = require("./../models/taskModel");

exports.createTask = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const newTask = await Task.create(req.body);
  res.status(202).json({
    status: "success",
    data: {
      task: newTask,
    },
  });
  //   next();
});

exports.getAllTasks = catchAsync(async (req, res, next) => {
  console.log("get all user");
  const task = await Task.findAll();
  res.status(200).json({
    status: "success",
    data: { task },
  });
});
exports.getTaskById = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const task = await Task.findByPk(req.params.id)
  res.status(200).json({
    status: "success",
    data: { task },
  });
});
