const User = require("../models/UserModel/User");
const UserPreferences = require("../models/UserModel/UserPreferences");
const ListeningHistory = require("../models/UserModel/ListeningHistory");
const generateToken = require("../middleware/generateToken");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appErr");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Signup API
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    await UserPreferences.create({ UserId: user.id });
    if (!user) {
      throw new Error("Something went wrong");
    }
    generateToken(user.id, res);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// login API
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 404));
  }
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return next(new AppError("Invalid email or password", 401));
  }
  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(new AppError("Invalid email or password", 401));
  }
  generateToken(user.id, res);
  res.status(200).json({ status: "Success", data: user });
});

//logout
exports.logout = catchAsync(async (req, res, next) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({ message: "logged out successfully" });
});
