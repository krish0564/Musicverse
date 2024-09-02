const sequelize = require("../database/sequelize");

const Artist = require("./SongModel/ArtistModel");
const Album = require("./SongModel/AlbumModel");
const Song = require("./SongModel/Song");
const Genre = require("./SongModel/Genres");
const ListeningHistory = require("./UserModel/ListeningHistory");
const User = require("./UserModel/User");

const UserPreferences = require("./UserModel/UserPreferences");
const Playlist = require("./PlaylistModel/playlistModel");
const PlaylistSong = require("./PlaylistModel/playlistSong");

// Define relationships after importing all models

Artist.hasMany(Album, { foreignKey: "artistId" });
Album.belongsTo(Artist, { foreignKey: "artistId" });

Artist.hasMany(Song, { foreignKey: "artistId" });
Song.belongsTo(Artist, { foreignKey: "artistId" });

Album.hasMany(Song, { foreignKey: "albumId" });
Song.belongsTo(Album, { foreignKey: "albumId" });

Song.belongsTo(Genre, {
  foreignKey: "genreId",
});

Playlist.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Playlist, { foreignKey: "userId" });

Playlist.belongsToMany(Song, { through: PlaylistSong });
Song.belongsToMany(Playlist, { through: PlaylistSong });

// Genre.hasMany(Song, {
//   foreignKey: "genreid",
// });

// // Define associations here
// UserPreferences.belongsTo(User, { foreignKey: "userId", as: "user" });
// User.hasOne(UserPreferences, { foreignKey: "userId", as: "preferences" });

// // ListeningHistory belongs to Song
// ListeningHistory.belongsTo(Song, { foreignKey: "songId", as: "song" });

// // ListeningHistory belongs to Artist
// ListeningHistory.belongsTo(Artist, { foreignKey: "artistId", as: "artist" });

module.exports = {
  sequelize,
  Artist,
  Album,
  Song,
  Genre,
  ListeningHistory,
  UserPreferences,
  Playlist,
  PlaylistSong,
};
