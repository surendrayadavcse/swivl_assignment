// routes/recipeRoutes.js

const express = require('express');
const Recipe = require('../models/Reciepe');
const router = express.Router();
const verifyToken = require('../verifytoken');

router.post('/recipe', async (req, res) => {
  try {
    const { title, description, ingredients, instructions } = req.body;

    // Create a new recipe
    const newRecipe = new Recipe({
      title,
      description,
      ingredients,
      instructions
    });

    // Save the new recipe to the database
    await newRecipe.save();

    res.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
  } catch (error) {
    console.error('Error creating recipe:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for updating an existing recipe
router.put('/recipe/:recipeId',verifyToken, async (req, res) => {
    try {
      const recipeId = req.params.recipeId;
      const { title, description, ingredients, instructions } = req.body;
  
      // Find the recipe by recipeId
      let recipe = await Recipe.findById(recipeId);
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
  
      // Update the recipe details
      if (title) recipe.title = title;
      if (description) recipe.description = description;
      if (ingredients) recipe.ingredients = ingredients;
      if (instructions) recipe.instructions = instructions;
  
      // Save the updated recipe to the database
      await recipe.save();
  
      res.status(200).json({ message: 'Recipe updated successfully', recipe });
    } catch (error) {
      console.error('Error updating recipe:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });




// Route for deleting a recipe
router.delete('/recipe/:recipeId',verifyToken, async (req, res) => {
  try {
    const recipeId = req.params.recipeId;

    // Find the recipe by recipeId and delete it
    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);
    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;


