const { DataTypes } = require("sequelize");
const sequelize = require("../../database/sequelize");
const User = require("./User");
const Song = require("../SongModel/Song");

const ListeningHistory = sequelize.define("ListeningHistory", {
  trackName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artistName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  listenedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = ListeningHistory;
