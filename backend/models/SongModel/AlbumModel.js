const sequelize = require("../../database/sequelize");
const { DataTypes } = require("sequelize");

//const Artist = require("./ArtistModel");
const Song = require("./Song");

const Album = sequelize.define("Album", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.DATE,
  },
  albumCover: {
    type: DataTypes.STRING,
  },
});

module.exports = Album;
