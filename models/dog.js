//Dependency for schema
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new dogSchema object
const dogSchema = new Schema({
  // `name` must be of type String
  name: String,
  // `gender` must be of type String
  gender: String
});

// This creates our model from the above schema, using mongoose's model method
const dog = mongoose.model("dog",dogSchema);

// Export the dog model
module.exports = dog;
