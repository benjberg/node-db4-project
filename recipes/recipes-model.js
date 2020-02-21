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
    return database("recipe_ingredients")
    .join("ingredients", "recipe_ingredients.ingredient_id", "=", "ingredients.id")
    .select("name", "quantity", "unit")
    .where({recipe_id})
    .orderBy("name");
}

function getInstructions(recipe_id) {
    return database("recipe_steps")
    .select("step", "instructions")
    .where({ recipe_id })
    .orderBy("step")
}