const express = require("express");

const recipes = require("./recipes-model");

const router = express.Router();

router.get("/", (req, res) => {
    recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => {
            res.status(500).json({message: "Could not get recipes."})
        })
})

router.get("/:id/ingredients", (req, res) => {
    recipes.getShoppingList(req.params.id)
        .then(ingredients => {
            res.status(200).json(ingredients);
        })
        .catch(error => {
            res.status(500).json({message: "Could not get recipe ingredients."})
        })
})

router.get("/:id", (req, res) => {
    recipes.getInstructions(req.params.id)
        .then(instructions => {
            res.status(200).json(instructions);
        })
        .catch(error => {
            res.status(500).json({message: "Could not get recipe instructions."})
        })
})

module.exports = router;