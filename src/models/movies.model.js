const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
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
  releaseDate: { type: Date, default: () => new Date("2024-05-24") },
  director: { type: String, default: null },
  actors: { type: [String] },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
