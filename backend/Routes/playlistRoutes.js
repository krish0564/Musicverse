const express = require("express");

const playlistController = require("../Controller/PlaylistController");
const protectRoutes = require("../middleware/protectedRoutes");

const router = express.Router();

router.post("/", protectRoutes, playlistController.addPlaylist);

router.get("/", protectRoutes, playlistController.getAllPlaylist);
router.get("/All", protectRoutes, playlistController.getTopPlaylist);
router.post("/:id", protectRoutes, playlistController.addPlaylistSong);
router.get("/:id", protectRoutes, playlistController.getSongsfromPlaylist);
module.exports = router;
