const { DataTypes } = require("sequelize");
const sequelize = require("../../database/sequelize");
const User = require("./User");

const UserPreferences = sequelize.define("UserPreferences", {
  theme: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "light",
  },
  notificationEnabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  preferredGenres: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

module.exports = UserPreferences;
