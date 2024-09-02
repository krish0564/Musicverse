const sequelize = require("../../database/sequelize");
const { DataTypes } = require("sequelize");
const Song = require("./Song");
const Genre = sequelize.define("Genre", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Genre;
