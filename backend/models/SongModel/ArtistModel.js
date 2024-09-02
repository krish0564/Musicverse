const sequelize = require("../../database/sequelize");
const { DataTypes } = require("sequelize");
const Album = require("./AlbumModel");
const Song = require("./Song");

const Artist = sequelize.define("Artist", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: { type: DataTypes.TEXT },
  artistCoverPic: {
    type: DataTypes.STRING,
  },
});

module.exports = Artist;
