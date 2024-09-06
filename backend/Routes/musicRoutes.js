const express = require("express");

const musicController = require("../Controller/musicController");
const protectRoutes = require("../middleware/protectedRoutes");
const upload = require("../middleware/multer");
const router = express.Router();

router.post(
  "/artist",
  protectRoutes,
  upload.fields([{ name: "image", maxCount: 1 }]),
  musicController.addArtist
);
router.post(
  "/album",
  protectRoutes,
  upload.fields([{ name: "image", maxCount: 1 }]),
  musicController.addAlbum
);
router.post("/genre", protectRoutes, musicController.addGenre);
router.post(
  "/song",
  protectRoutes,
  upload.fields([
    { name: "audio", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  musicController.addSong
);
router.get("/album", musicController.getTopAlbums);
router.get("/album/:albumId", musicController.getSongbyAlbums);

router.get("/artist", protectRoutes, musicController.getTopArtist);
router.get("/artist/:artistId", protectRoutes, musicController.getSongbyArtist);

router.get("/genre", protectRoutes, musicController.getTopGenre);
router.get("/genre/:genreId", protectRoutes, musicController.getSongbyGenre);

router.get("/song/:id", protectRoutes, musicController.getSongById);
router.get("/search", protectRoutes, musicController.searchSong);

module.exports = router;
