const jwt = require("jsonwebtoken");
const User = require("../models/UserModel/User");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appErr");
const protectRoutes = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return next(new AppError("UnAutharize access", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    return next(new AppError("UnAutharize access", 401));
  }
  const user = await User.findByPk(decoded.userId);
  if (!user) {
    return next(new AppError("UnAutharize access", 401));
  }
  req.user = user;

  next();
});
module.exports = protectRoutes;
