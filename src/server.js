require("dotenv").config({ path: "src/.env" });
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

//routes
const listRoutes = require("./routes/list.routes");

// // const MONGODB_URI = "mongodb://127.0.0.1:27017/myList";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to database ☀ ✔"))
  .catch((err) => console.log("facing error in database connection", err));

app.get("/", (req, res) => res.send("hello ! server is working fine"));
app.use("/api/list", listRoutes);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log("app is listening on port ", port);
});
