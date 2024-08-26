const catchAsync = require("../utils/catchAsync");
const User = require("./../models/userModel");

exports.createUser = catchAsync(async (req, res, next) => {
  console.log(req.body);
    const newUser = await User.create(req.body);
    res.status(202).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
//   next();
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
    console.log('get all user');
  const user = await User.findAll();
  res.status(200).json({
    status: "success",
    data: { user },
  });
});
