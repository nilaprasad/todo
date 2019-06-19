import express from "express";
import db from "./db/db";
import bodyParser from "body-parser";
import router from "./routes/routes.js";
import mongoose from "mongoose";

//Set up the express app
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

//Connect to the DB
mongoose
  .connect("mongodb://localhost/todos")
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

app.use("/", router);

const PORT = 3000;

app.listen(3000, () => {
  console.log("App listening on port ${PORT}");
});
