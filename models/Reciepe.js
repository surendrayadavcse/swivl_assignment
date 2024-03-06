// models/Recipe.js

const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  ingredients: [String],
  instructions: { type: String },
  // Add more fields as needed
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
