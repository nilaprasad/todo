import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model("Todo", todoSchema);
