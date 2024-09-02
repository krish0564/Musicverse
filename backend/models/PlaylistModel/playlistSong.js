const sequelize = require("../../database/sequelize");
const { DataTypes } = require("sequelize");
const PlaylistSong = sequelize.define("PlaylistSong", {});

module.exports = PlaylistSong;
