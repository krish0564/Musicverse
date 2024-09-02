const { Artist, Album, Genre, Song } = require("../models/RelationModel");
const { v2: cloudinary } = require("cloudinary");
const { Op } = require("sequelize");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appErr");

exports.addArtist = catchAsync(async (req, res, next) => {
  const { name, bio } = req.body;
  const image = req.files.image[0];
  const imageUpload = await cloudinary.uploader.upload(image.path, {
    resource_type: "image",
  });
  const artist = await Artist.create({
    name,
    bio,
    artistCoverPic: imageUpload.secure_url,
  });
  res.status(201).json(artist);
});
exports.addAlbum = catchAsync(async (req, res, next) => {
  const { title, releaseDate, artistId } = req.body;
  const image = req.files.image[0];
  const imageUpload = await cloudinary.uploader.upload(image.path, {
    resource_type: "image",
  });

  const album = await Album.create({
    title,
    releaseDate,
    artistId,
    albumCover: imageUpload.secure_url,
  });
  res.status(201).json(album);
});
exports.addGenre = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  const genre = await Genre.create({ name });
  res.status(201).json(genre);
});
exports.addSong = catchAsync(async (req, res, next) => {
  const { title, artistId, albumId, genreId } = req.body;
  const audio = req.files.audio[0];
  const audioUpload = await cloudinary.uploader.upload(audio.path, {
    resource_type: "video",
  });
  const lengthInSeconds = Math.floor(audioUpload.duration);
  const hours = Math.floor(lengthInSeconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((lengthInSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (lengthInSeconds % 60).toString().padStart(2, "0");
  const length = `${hours}:${minutes}:${seconds}`;
  const image = req.files.image[0];
  const imageUpload = await cloudinary.uploader.upload(image.path, {
    resource_type: "image",
  });

  const song = await Song.create({
    title,
    length,
    artistId,
    albumId,
    genreId,
    length,
    file: audioUpload.secure_url,
    coverImage: imageUpload.secure_url,
  });
  if (!song) {
    return next(new AppError("No Song added", 400));
  }
  res.status(201).json(song);
});

//getSong by id
exports.getSongById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  // Find the song by ID and include related data
  const song = await Song.findByPk(id, {
    include: [
      {
        model: Artist,
        attributes: ["name"], // Include artist details
      },
    ],
  });

  if (!song) {
    return next(new AppError("Song not found", 404));
  }
  res.status(200).json(song);
});

//get albums
exports.getTopAlbums = catchAsync(async (req, res, next) => {
  const albums = await Album.findAll({
    limit: 10,
    order: [["createdAt", "DESC"]], // Optional: Order by creation date, adjust based on your requirement
  });
  res.status(200).json(albums);
});
//get sing by album
exports.getSongbyAlbums = catchAsync(async (req, res, next) => {
  const { albumId } = req.params;
  const songs = await Song.findAll({
    where: { albumId },
    limit: 10,
    include: [
      {
        model: Artist,
        attributes: ["name"], // Include artist details
      },
    ],
  });
  if (!songs) {
    return next(new AppError("Song not found", 404));
  }
  res.status(200).json(songs);
});
//get all artist
exports.getTopArtist = catchAsync(async (req, res, next) => {
  const artist = await Artist.findAll({
    limit: 10,
    order: [["createdAt", "DESC"]], // Optional: Order by creation date, adjust based on your requirement
  });
  res.status(200).json(artist);
});
// get song by Artist
exports.getSongbyArtist = catchAsync(async (req, res, next) => {
  const { artistId } = req.params;
  const songs = await Song.findAll({
    where: { artistId },
    limit: 10,
    include: [
      {
        model: Artist,
        attributes: ["name"], // Include artist details
      },
    ],
  });
  if (!songs) {
    return next(new AppError("Song not found", 404));
  }
  res.status(200).json(songs);
});
// get genre
exports.getTopGenre = catchAsync(async (req, res, next) => {
  const genre = await Genre.findAll({
    limit: 10,
    order: [["createdAt", "DESC"]], // Optional: Order by creation date, adjust based on your requirement
  });
  res.status(200).json(genre);
});
// get song by Artist
exports.getSongbyGenre = catchAsync(async (req, res, next) => {
  const { genreId } = req.params;
  const songs = await Song.findAll({
    where: { genreId },
    limit: 10,
    include: [
      {
        model: Artist,
        attributes: ["name"], // Include artist details
      },
    ],
  });
  if (!songs) {
    return next(new AppError("Song not found", 404));
  }
  res.status(200).json(songs);
});

// search Song
exports.searchSong = catchAsync(async (req, res, next) => {
  const { title, artist, album, genre } = req.query;

  // Initialize the search criteria and include options
  const searchCriteria = {};
  const includeOptions = [];

  // Search by title
  if (title) {
    searchCriteria.title = { [Op.like]: `%${title}%` };
  }

  // Search by artist name
  if (artist) {
    includeOptions.push({
      model: Artist,
      where: { name: { [Op.like]: `%${artist}%` } },
      attributes: ["id", "name"], // Include desired artist attributes
    });
  }

  // Search by album title
  if (album) {
    includeOptions.push({
      model: Album,
      where: { title: { [Op.like]: `%${album}%` } },
      attributes: ["id", "title"], // Include desired album attributes
    });
  }

  // Search by genre name
  if (genre) {
    includeOptions.push({
      model: Genre,
      where: { name: { [Op.like]: `%${genre}%` } },
      attributes: ["name"], // Include desired genre attributes
    });
  }

  // Query the database with the criteria and includes
  const songs = await Song.findAll({
    where: searchCriteria,
    include: [
      {
        model: Artist,
        attributes: ["id", "name"], // Populate artist details
      },
      {
        model: Album,
        attributes: ["id", "title"], // Populate album details
      },
      {
        model: Genre,
        attributes: ["id", "name"], // Populate genre details
      },
      ...includeOptions,
    ],
  });
  if (songs.length === 0) {
    return next(new AppError("No songs found matching the criteria."));
  }
  res.status(200).json(songs);
});
