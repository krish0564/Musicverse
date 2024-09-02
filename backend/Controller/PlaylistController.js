const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appErr");
const { Playlist, PlaylistSong, Song } = require("../models/RelationModel");

exports.addPlaylist = catchAsync(async (req, res, next) => {
  const { title } = req.body;
  const userId = req.user.id;
  const playlist = await Playlist.create({ title, userId });

  res.status(201).json(playlist);
});
exports.addPlaylistSong = catchAsync(async (req, res, next) => {
  const { SongId } = req.body;
  const userId = req.user.id;
  const { id: PlaylistId } = req.params;
  const playlistSong = await PlaylistSong.create({
    SongId,
    userId,
    PlaylistId,
  });
  res.status(201).json(playlistSong);
});
//get all user playlist
exports.getAllPlaylist = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const playlist = await Playlist.findAll({
    where: { userId },
  });

  res.status(200).json(playlist);
});
//get top playlist
exports.getTopPlaylist = catchAsync(async (req, res) => {
  const playlist = await Playlist.findAll({
    limit: 10,
  });

  res.status(200).json(playlist);
});
//get song from playlist
exports.getSongsfromPlaylist = catchAsync(async (req, res) => {
  const { id: PlayerlistId } = req.params;
  const playlist = await Playlist.findByPk(PlayerlistId, {
    include: [
      {
        model: Song,
        through: { attributes: [] },
      },
    ],
  });
  res.status(200).json(playlist);
});
