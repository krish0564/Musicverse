const sequelize = require("../../database/sequelize");
const { DataTypes } = require("sequelize");

const Artist = require("./ArtistModel");
const Album = require("./AlbumModel");
const Genre = require("../SongModel/Genres");
//const Playlist = require('./Playlist');
const Song = sequelize.define("Song", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  length: {
    type: DataTypes.TIME,
  },
  file: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coverImage: {
    type: DataTypes.STRING,
  },
});

module.exports = Song;
