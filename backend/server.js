const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const dotenv = require("dotenv");
const cors = require("cors");

const sequelize = require("./database/sequelize");

const userRoutes = require("./Routes/UserRoutes");
const musicRoutes = require("./Routes/musicRoutes");
const playlistRoutes = require("./Routes/playlistRoutes");
const errorHandler = require("./middleware/ErrorHandler");
const AppError = require("./utils/appErr");
const connectCloudinary = require("./config/cloudinary");

const app = express();
dotenv.config();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
// rate limit from same api
const limiter = rateLimit({
  max: 100,
  windowMS: 60 * 60 * 1000,
  message: "too many request Try again later",
});

//data sanitization
app.use("/api", limiter);
app.use(hpp());

app.use("/api/users", userRoutes);
app.use("/api/music", musicRoutes);
app.use("/api/playlist", playlistRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

//error handling
app.all("*", (req, res, next) => {
  next(new AppError(`Cant't find ${req.originalUrl} in the server`, 404));
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`MusicVerse server is running at http://localhost:${port}`);
  sequelize.sync();
  connectCloudinary();
});
