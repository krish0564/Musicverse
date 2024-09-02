const JWT = require("jsonwebtoken");

const generateTokenandCookies = (userId, res) => {
  const token = JWT.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 100,
    httpOnly: true,
    sameSite: "strict",
  });
};
module.exports = generateTokenandCookies;
