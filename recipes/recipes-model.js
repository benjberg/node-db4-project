const database = require("../data/db-config");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return database("recipes");
}

function getShoppingList(recipe_id) {
    return database("recipe-ingredients")
    .join("ingredients", "recipe-ingredients.ingredient_id", "=", "ingredients.ingredient_id")
    .select("name", "quantity", "unit")
    .where({recipe_id})
    .sortBy("name");
}

function getInstructions(recipe_id) {
    return database("recipe_steps")
    .where({ recipe_id })
}