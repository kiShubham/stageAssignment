// import services
const listServices = require("../services/list.service");

//* - add a movie or TV show to the user's list. Each item can be identified by a unique ID, and the user's list should not contain duplicates.

const addNew = async (req, res) => {
  const { episodes, title } = req.body;
  try {
    const existingItem = episodes
      ? await listServices.findTVShowByTitle(title)
      : await listServices.findMovieByTitle(title);

    if (existingItem) {
      return res.status(400).json({
        message: `${episodes ? "TV show" : "Movie"} already exists in the list`,
      });
    }
    const data = req.body;

    const newData = episodes
      ? await listServices.create(data, true) //its a tvShow
      : await listServices.create(data, false); // its a movie

    res.status(201).json({
      message: `new ${episodes ? "tvshow" : "movie"} added to the list`,
      newData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// * remove an item from the user's list using the item's unique ID.

const removeOne = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await listServices.deleteIt(id);
    if (!data)
      res.status(400).json({
        message: "no task found",
      });
    else res.status(200).json({ message: "deleted successfull", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* - retrieve all items in the user's list. The response should be paginated to handle potentially large lists efficiently.

const fetchAll = async (req, res) => {
  try {
    const getAll = await listServices.fetch();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addNew,
  removeOne,
  fetchAll,
};
