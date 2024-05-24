const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  episodeNumber: { type: Number, required: true },
  seasonNumber: { type: Number, required: true },
  releaseDate: { type: Date, required: true },
  director: { type: String, required: true },
  actors: [{ type: String, required: true }],
});

const tvShowsSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, default: "movie Description" },
  genres: {
    type: [String], // array signifies that a movie can have multiple genres
    enum: [
      "Action",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Romance",
      "SciFi",
    ],
    default: ["Drama"],
  },
  episodes: [episodeSchema],
});

const TVshow = mongoose.model("TVShow", tvShowsSchema);
module.exports = TVshow;
