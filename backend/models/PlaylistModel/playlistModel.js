const sequelize = require("../../database/sequelize");
const { DataTypes } = require("sequelize");
const Playlist = sequelize.define("Playlist", {
  title: {
    type: DataTypes.STRING,
  },
});

module.exports = Playlist;
