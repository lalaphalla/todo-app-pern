const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);

  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXIPRES_IN * 60 * 1000
    ),
    // httpOnly: true
  };
  if (process.env.NODE_ENV === "production") cookieOption.secure = true;
  res.cookie("jwt", token, cookieOption);
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res) => {
  console.log(req.body);
  const newUser = await User.create(req.body);
  //   const newUser = req.body;
  createSendToken(newUser, 201, res);
});

const comparePasword = (userInput, dataBaseInput) => {
  return userInput === dataBaseInput;
};

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    next(new AppError("Please Provide email and password", 400));
  }
  const user = await User.findOne({ where: { email: email } });
  if (!user.email || !comparePasword(password, user.password)) {
    return next(new AppError("Error wrong email or password"));
  }
  createSendToken(user, 201, res);
});

