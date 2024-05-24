// import list model
const TVSHOW = require("../models/tvshows.model");
const MOVIES = require("../models/movies.model");

const create = async (data, bool) => {
  try {
    if (bool) {
      const newShow = await TVSHOW.create(data);
      return newShow;
    } else {
      const newMovie = await MOVIES.create(data);
      return newMovie;
    }
  } catch (error) {
    console.log("Error in creating document", error);
    throw error;
  }
};

const deleteIt = async (id) => {
  try {
    const deletedTVShow = await TVSHOW.findByIdAndDelete(id);
    if (deletedTVShow) return deletedTVShow;

    const deletedMovie = await MOVIES.findByIdAndDelete(id);
    return deletedMovie;
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};

const fetch = async () => {
  try {
    const [tvShows, movies] = await Promise.all([TVSHOW.find(), MOVIES.find()]);
    return {
      tvShows,
      movies,
    };
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};
const findTVShowByTitle = async (title) => {
  const findBool = await TVSHOW.findOne({ title: title });
  return findBool;
};
const findMovieByTitle = async (title) => {
  const findBool = await MOVIES.findOne({ title: title });
  return findBool;
};

module.exports = {
  create,
  deleteIt,
  fetch,
  findTVShowByTitle,
  findMovieByTitle,
};

//   const getAllTvShows = await TVSHOW.find();
//   const getAllMovies = await MOVIES.find();
//   return {
//     getAllMovies,
//     getAllTvShows,
//   };
